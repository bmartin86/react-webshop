import { useState } from 'react';
import './styles/ProductsSidebar.css';
import { Icon } from '@iconify/react';

function ProductsSidebar({ toggleDropdown }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  // State variables for icons
  const [categoryIcon, setCategoryIcon] = useState('ep:arrow-down-bold');
  const [productIcon, setProductIcon] = useState('ep:arrow-down-bold');

  function toggleCategoryDropdown(event) {
    event.stopPropagation();
    setCategoryDropdown(!categoryDropdown);
    setCategoryIcon(categoryDropdown ? 'ep:arrow-down-bold' : 'ep:arrow-up-bold');
    toggleDropdown(true);
  }

  function toggleProductDropdown(event) {
    event.stopPropagation();
    setProductDropdown(!productDropdown);
    setProductIcon(productDropdown ? 'ep:arrow-down-bold' : 'ep:arrow-up-bold');
    toggleDropdown(true);
  }
  return (
    <div id="products-aside">
      <form action="#" method="get" target="_self">
        <ul>
          <li className="filter-group">
            <button type="button" onClick={toggleCategoryDropdown} className="dropbtn">
              CATEGORY
              <Icon icon={categoryIcon} width="1rem" height="1rem" alt="arrow icon" />
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
              <Icon icon={productIcon} width="1rem" height="1rem" alt="arrow icon" />
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