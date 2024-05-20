import { useState } from "react";
import { useData } from "../../context/DataContext";
import "./styles/ProductsSidebar.css";
import { Icon } from "@iconify/react";

function ProductsSidebar({ toggleDropdown }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [categoryIcon, setCategoryIcon] = useState("ep:arrow-down-bold");
  const [productIcon, setProductIcon] = useState("ep:arrow-down-bold");
  const { categories, loading, error } = useData();

  function toggleCategoryDropdown(event) {
    event.stopPropagation();
    setCategoryDropdown(!categoryDropdown);
    setCategoryIcon(
      categoryDropdown ? "ep:arrow-down-bold" : "ep:arrow-up-bold"
    );
    toggleDropdown(true);
  }

  function toggleProductDropdown(event) {
    event.stopPropagation();
    setProductDropdown(!productDropdown);
    setProductIcon(productDropdown ? "ep:arrow-down-bold" : "ep:arrow-up-bold");
    toggleDropdown(true);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="products-aside">
      <form action="#" method="get" target="_self">
        <ul>
          <li className="filter-group">
            <button
              type="button"
              onClick={toggleCategoryDropdown}
              className="dropbtn"
            >
              CATEGORY
              <Icon
                icon={categoryIcon}
                width="1rem"
                height="1rem"
                alt="arrow icon"
              />
            </button>
            <ul
              className={`dropdown-content ${categoryDropdown ? "show" : ""}`}
            >
              <li>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-female"
                    value="female"
                  />
                  WOMEN
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-male"
                    value="male"
                  />
                  MEN
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-children"
                    value="children"
                  />
                  CHILDREN
                </label>
              </li>
            </ul>
          </li>
          <li className="filter-group">
            <button
              type="button"
              onClick={toggleProductDropdown}
              className="dropbtn"
            >
              SHOP BY PRODUCT
              <Icon
                icon={productIcon}
                width="1rem"
                height="1rem"
                alt="arrow icon"
              />
            </button>
            <ul className={`dropdown-content ${productDropdown ? "show" : ""}`}>
              {categories.map((category) => (
                <li key={category.categoryId}>
                  <label>
                    <input
                      type="checkbox"
                      name="product-filter"
                      id={category.categoryId}
                      value={category.categoryName}
                    />
                    {category.categoryName}
                  </label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <input
              type="submit"
              name="submit-filter-data"
              id="submitFilterData"
              className="filter-submit-button"
              value="Apply Filters"
            />
          </li>
        </ul>
      </form>
    </div>
  );
}
export { ProductsSidebar };
