import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
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
    <section class="video-hero-wrapper">
      <video id="hero-video" autoplay loop muted>
        <source src="/src/assets/images/video/thefashion.mp4" type="video/mp4" />
      </video>
      <div class="video-hero-text">
        <div class="logo-text">The Fashion Store</div>
      </div>
      <div class="overlay"></div>
    </section>

    <div class="index-h1">
      <div class="line-div">
        <div class="line-inner-div"></div>
        <div></div>
      </div>
      <h1>Elevate Your Style</h1>
      <div class="line-div">
        <div class="line-inner-div"></div>
        <div></div>
      </div>
    </div>
    

    {/* <!-- index img hero --> */}
    <section class="hero-wrapper">
      <div class="hero-image">
        <div class="hero-text">
          <h3>SPRING IS ALMOST AT THE DOOR</h3>
          <h5>Explore New Collection</h5>
          <a href="products.html">
          <button>SHOP NOW</button>
          </a>
        </div>
      </div>
    </section>

    {/* <!-- new arrivals --> */}
    <div class="main-content-wrapper">
      <section class="products-section">
        <h2>Popular Items</h2>
        <div class="products-outer-div">
          <div class="products-card">
            <a href="">
              <img src="/src/assets/images/products/women-trenchcoat.webp" alt="Model wearing product image" class="products-image" />
            </a>
          </div>
          <div class="products-card">
            <a href="">
              <img src="/src/assets/images/products/men-jacket4.webp" alt="Model wearing product image" class="products-image" />
            </a>
          </div>
          <div class="products-card">
            <a href="">
              <img src="/src/assets/images/products/women-jeans2.webp" alt="Model wearing product image" class="products-image" />
            </a>
          </div>
          <div class="products-card">
            <a href="">
              <img src="/src/assets/images/products/child-jacket.webp" alt="Model wearing product image" class="products-image" />
            </a>
          </div>
        </div>
        
      </section>

      {/* <!-- productCategories section --> */}
      {/* <section class="productCategories-wrapper">
        <div id="productCategories"></div>
      </section> */}

      {/* <!-- productListCard section --> */}
      <section class="product-list-card-outer">
        <div class="product-list-card-row">

          <div class="hidden-elem"></div>
          <h2 class="productListCard-title">
            You Might Also Like
          </h2>
          <div class="hidden-elem"></div>

        </div>
        <div class="product-list-card-row">

          <div class="scroll-icon-box-left">
            <button>
              <img src="/src/assets/images/icons/211689_left_arrow_icon.png" alt="Left arrow icon" />
            </button>
          </div>

          <div id="productListCardTwo"></div>

          <div class="scroll-icon-box-right">
            <button>
              <img src="/src/assets/images/icons/211607_right_arrow_icon.png" alt="Right arrow icon" />
            </button>
          </div>

        </div>
      </section>

      {/* <!-- asideBlog --> */}
      {/* <div class="blog-section">
        <aside id="asideBlog"></aside>
      </div> */}

      {/* <!-- newsletter --> */}
      <section id="newsletter">
        <div class="flex-row">
          <h2 id="newsletter-title">SUBSCRIBE for the NEWSLETTER</h2>
        </div>
        <div class="flex-row">
          <h3 id="newsletter-title">Get the latest news straight to your inbox</h3>
        </div>
        <form action="#" method="get">
          <div class="newsletter-flex">

            <div class="flex-row">
              <input type="email"name="email" placeholder="E-mail*" required />
              <select name="gender" id="gender">
                <option value="Unknown" id="value-1">Choose product category</option>
                <option value="Female" id="value-2">Women</option>
                <option value="Male" id="value-3">Men</option>
                <option value="Children" id="value-4">Children</option>
              </select>
            </div>
          </div>
          <div class="checkbox">
            <div>
              <input type="checkbox" required name="required-checkbox" />
            </div>
            <div>
              <label for="required-checkbox">
                I would like to receive information via email on the selected subjects and I agree to the processing of my personal information (consent). <br /> I can withdraw my consent at any time at the end of an email. *
              </label>
            </div>
          </div>
          <div class="checkbox">
            <div>
              <input type="checkbox" name="newsletter" />
            </div>
            <div>
              <label for="newsletter">
                Send me exclusive offers and discounts tailored to my preferences.             
              </label>
            </div>
          </div>

          <div class="flex-row">
            <div class="newsletter-submit-box">
              <input type="submit" id="form-submit" value="Sign up now" />
            </div>
          </div>
          <div class="checkbox checkbox-info">
            Fields marked with an (*) are required information.
          </div>
        </form>
      </section>

    </div>
  </main>
  )
}
export { HomePage }