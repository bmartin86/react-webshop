import { useState } from 'react';
import './styles/ProductsSidebar.css';

function ProductsSidebar({ toggleDropdown }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  function toggleCategoryDropdown(event) {
    event.stopPropagation(); // Stop event propagation
    setCategoryDropdown(!categoryDropdown);
    toggleDropdown(true); // Notify parent component that a dropdown is toggled

    // Toggle the icon
    const img = event.currentTarget.querySelector('.myImage');
    toggleIcon(img);
  }

  function toggleProductDropdown(event) {
    event.stopPropagation(); // Stop event propagation
    setProductDropdown(!productDropdown);
    toggleDropdown(true); // Notify parent component that a dropdown is toggled

    // Toggle the icon
    const img = event.currentTarget.querySelector('.myImage');
    toggleIcon(img);
  }

  // Function to toggle the icon
  function toggleIcon(img) {
    if (img.src.includes('angle-down-solid.svg')) {
      img.src = '/src/assets/images/icons/angle-up-solid.svg';
      img.alt = 'arrow up icon';
    } else {
      img.src = '/src/assets/images/icons/angle-down-solid.svg';
      img.alt = 'arrow down icon';
    }
  }
  return (
    <div id="products-aside">
      <form action="#" method="get" target="_self">
        <ul>
          <li className="filter-group">
            <button type="button" onClick={toggleCategoryDropdown} className="dropbtn">
              CATEGORY
              <img className="myImage" src="/src/assets/images/icons/angle-down-solid.svg"  alt="arrow down icon" />
            </button>
            <ul className={`dropdown-content ${categoryDropdown ? 'show' : ''}`}>
              <li>
                <label>
                  <input type="radio" name="gender" id="gender-female" value="female" /> 
                    WOMEN
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="gender" id="gender-male" value="male" /> 
                    MEN
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="gender" id="gender-children" value="children" /> 
                    CHILDREN
                </label>
              </li>
            </ul>
          </li>
          <li className="filter-group">
            <button type="button" onClick={toggleProductDropdown} className="dropbtn">
              SHOP BY PRODUCT
              <img className="myImage" src="/src/assets/images/icons/angle-down-solid.svg"  alt="arrow down icon" />
            </button>
            <ul className={`dropdown-content ${productDropdown ? 'show' : ''}`}>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-jackets-coats" value="jackets-coats" /> 
                  Jackets & Coats
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-tshirts-tanks" value="tshirts-tanks" /> 
                  T-shirts & Tanks
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-hoodies-sweatshirts" value="hoodies-sweatshirts" /> 
                  Hoodies & Sweatshirts
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-shirts" value="shirts" /> 
                  Shirts
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-blazers-suits" value="blazers-suits" /> 
                  Blazers & Suits
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-cardigans-sweaters" value="cardigans-sweaters" /> 
                  Cardigans & Sweaters
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-shoes" value="shoes" /> 
                  Shoes
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-socks" value="socks" /> 
                  Socks
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-underwear" value="underwear" /> 
                  Underwear
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-sleepwear-loungewear" value="sleepwear-loungewear" /> 
                  Sleepwear & Loungewear
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-sportswear" value="sportswear" /> 
                  Sportswear
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="product-filter" id="product-shorts" value="shorts" /> 
                  Shorts
                </label>
              </li>
            </ul>
          </li>
          <li>
            <input type="submit" name="submit-filter-data" id="submitFilterData" className="filter-submit-button" value="Apply Filters" />
          </li>
        </ul>
      </form>
    </div>
  )
}
export { ProductsSidebar }