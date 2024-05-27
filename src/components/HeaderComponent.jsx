import { useCartContext } from "../context/CartContext";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";
import "../styles/header.css";
import "../styles/MainStyles.css";

function HeaderComponent() {
  const { items, query, handleInputChange } = useCartContext();
  const productsCount = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const header = document.getElementById("header-wrapper");
      if (header) {
        if (location.pathname === "/" && scrollTop > 60 && scrollTop <= 720) {
          header.style.top = "0";
        } else {
          header.style.top = "-155px";
        }
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      const header = document.getElementById("header-wrapper");
      if (header) {
        header.style.top = "0"; // Ensure header is visible on other routes
      }
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (location.pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [location.pathname]);

  const headerStyle =
    location.pathname === "/"
      ? { position: "fixed", top: "-155px", transition: "top 0.3s" }
      : { position: "relative", top: "0", transition: "none" };

  return (
    <div id="header-wrapper" style={headerStyle}>
      <div id="header">
        <div className="header-top-row">
          <div className="social-links">
            <button className="phone-button">
              <Link to="tel:+385221234567" target="_blank">
                <Icon
                  icon="ri:phone-fill"
                  width="1.3rem"
                  height="1.3rem"
                  style={{ color: "white" }}
                  alt="Phone icon"
                />
              </Link>
              <div className="tooltip">Phone</div>
            </button>
            <button className="email-button">
              <Link to="mailto:fashion.store@info.org" target="_blank">
                <Icon
                  icon="clarity:email-solid"
                  width="1.3rem"
                  height="1.3rem"
                  style={{ color: "white" }}
                  alt="Email icon"
                />
              </Link>
              <div className="tooltip">Email</div>
            </button>
            <SocialLinks />
          </div>
          <div className="logo-box">
            <div id="logo">
              <Link to="/">
                <img
                  src={
                    "https://res.cloudinary.com/dx6qjxz55/image/upload/v1711201666/logo_nbgkq0.avif"
                  }
                  alt="Fashion Store Logo"
                />
              </Link>
            </div>
          </div>

          <div className="search-cart">
            <input
              className="search-input"
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Search products..."
            />
            <button className="cart-icon-button">
              <Link to="/cart">
                <Icon
                  icon="bxs:cart"
                  width="1.6rem"
                  height="1.6rem"
                  style={{ color: "white" }}
                  alt="Cart icon"
                  className="cartIcon"
                />
                {productsCount ? (
                  <div className="cartNotifications">{productsCount}</div>
                ) : (
                  <div className="hidden"></div>
                )}
              </Link>
              <div className="tooltip">Cart</div>
            </button>
          </div>
        </div>

        <nav className="header-nav">
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
export { HeaderComponent };
