import "../styles/MainStyles.css";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AsideBlogComponent } from "../components/Newsroom/AsideBlogComponent";
import { ProductCategory } from "../components/Products/ProductCategory";
import { Newsletter } from "../components/Newsletter";

function HomePage() {
  useEffect(() => {
    const onLoad = () => {
      const video = document.getElementById("hero-video");
      video.play();
    };
    window.addEventListener("load", onLoad);

    // Cleanup function
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <main>
      {/* <!-- index video hero --> */}
      <section className="video-hero-wrapper">
        <video id="hero-video" autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/dx6qjxz55/video/upload/v1711201703/thefashion_sfy9ab.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-hero-text">
          <div className="logo-text">The Fashion Store</div>
        </div>
        <div className="overlay"></div>
      </section>

      <div className="index-h1">
        <div className="line-div">
          <div className="line-inner-div"></div>
          <div></div>
        </div>
        <h1>Elevate Your Style</h1>
        <div className="line-div">
          <div className="line-inner-div"></div>
          <div></div>
        </div>
      </div>

      {/* <!-- index img hero --> */}
      <section className="hero-wrapper">
        <div className="hero-image">
          <div className="hero-text">
            <h3>SPRING IS ALMOST AT THE DOOR</h3>
            <h5>Explore New Collection</h5>
            <Link to="/products">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </section>
      <ProductCategory />
      <section className="newsletterWrapper">
        <Newsletter />
      </section>
      <AsideBlogComponent />
    </main>
  );
}
export { HomePage };
