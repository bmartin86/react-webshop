import { useCartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="header-wrapper">
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
