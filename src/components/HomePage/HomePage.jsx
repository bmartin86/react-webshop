import { useState, useEffect } from 'react';
import '../MainStyles.css';

function HomePage () {
  useEffect(() => {
    // Equivalent to window.onload = function() { ... }
    const onLoad = () => {
      const video = document.getElementById("hero-video");
      video.play();
    };
    window.addEventListener('load', onLoad);

    // Cleanup function
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <main>
    {/* <!-- index video hero --> */}
    <section className="video-hero-wrapper">
      <video id="hero-video" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dx6qjxz55/video/upload/v1711201703/thefashion_sfy9ab.mp4" type="video/mp4" />
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
          <a href="products.html">
          <button>SHOP NOW</button>
          </a>
        </div>
      </div>
    </section>

    {/* <!-- new arrivals --> */}
    <div className="main-content-wrapper">
      <section className="products-section">
        <h2>Popular Items</h2>
        <div className="products-outer-div">
          <div className="products-card">
            <a href="">
              <img src="/src/assets/images/products/women-trenchcoat.webp" alt="Model wearing product image" className="products-image" />
            </a>
          </div>
          <div className="products-card">
            <a href="">
              <img src="/src/assets/images/products/men-jacket4.webp" alt="Model wearing product image" className="products-image" />
            </a>
          </div>
          <div className="products-card">
            <a href="">
              <img src="/src/assets/images/products/women-jeans2.webp" alt="Model wearing product image" className="products-image" />
            </a>
          </div>
          <div className="products-card">
            <a href="">
              <img src="/src/assets/images/products/child-jacket.webp" alt="Model wearing product image" className="products-image" />
            </a>
          </div>
        </div>
        
      </section>

      {/* <!-- productCategories section --> */}
      {/* <section className="productCategories-wrapper">
        <div id="productCategories"></div>
      </section> */}

      {/* <!-- productListCard section --> */}
      <section className="product-list-card-outer">
        <div className="product-list-card-row">

          <div className="hidden-elem"></div>
          <h2 className="productListCard-title">
            You Might Also Like
          </h2>
          <div className="hidden-elem"></div>

        </div>
        <div className="product-list-card-row">

          <div className="scroll-icon-box-left">
            <button>
              <img src="/src/assets/images/icons/211689_left_arrow_icon.png" alt="Left arrow icon" />
            </button>
          </div>

          <div id="productListCardTwo"></div>

          <div className="scroll-icon-box-right">
            <button>
              <img src="/src/assets/images/icons/211607_right_arrow_icon.png" alt="Right arrow icon" />
            </button>
          </div>

        </div>
      </section>

      {/* <!-- asideBlog --> */}
      {/* <div className="blog-section">
        <aside id="asideBlog"></aside>
      </div> */}

      {/* <!-- newsletter --> */}
      <section id="newsletter">
        <div className="flex-row">
          <h2 id="newsletter-title">SUBSCRIBE for the NEWSLETTER</h2>
        </div>
        <div className="flex-row">
          <h3 id="newsletter-title">Get the latest news straight to your inbox</h3>
        </div>
        <form action="#" method="get">
          <div className="newsletter-flex">

            <div className="flex-row">
              <input type="email"name="email" placeholder="E-mail*" required />
              <select name="gender" id="gender">
                <option value="Unknown" id="value-1">Choose product category</option>
                <option value="Female" id="value-2">Women</option>
                <option value="Male" id="value-3">Men</option>
                <option value="Children" id="value-4">Children</option>
              </select>
            </div>
          </div>
          <div className="checkbox">
            <div>
              <input type="checkbox" required name="required-checkbox" />
            </div>
            <div>
              <label htmlFor="required-checkbox">
                I would like to receive information via email on the selected subjects and I agree to the processing of my personal information (consent). <br /> I can withdraw my consent at any time at the end of an email. *
              </label>
            </div>
          </div>
          <div className="checkbox">
            <div>
              <input type="checkbox" name="newsletter" />
            </div>
            <div>
              <label htmlFor="newsletter">
                Send me exclusive offers and discounts tailored to my preferences.             
              </label>
            </div>
          </div>

          <div className="flex-row">
            <div className="newsletter-submit-box">
              <input type="submit" id="form-submit" value="Sign up now" />
            </div>
          </div>
          <div className="checkbox checkbox-info">
            Fields marked with an (*) are required information.
          </div>
        </form>
      </section>

    </div>
  </main>
  )
}
export { HomePage }