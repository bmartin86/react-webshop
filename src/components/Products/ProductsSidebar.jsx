import { useState, useContext, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import { Icon } from "@iconify/react";
import "./styles/ProductsSidebar.css";

function ProductsSidebar({ toggleDropdown }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [categoryIcon, setCategoryIcon] = useState("ep:arrow-down-bold");
  const [productIcon, setProductIcon] = useState("ep:arrow-down-bold");
  const {
    categories,
    genders,
    handleCategoryChange,
    handleGenderChange,
    loading,
    error,
  } = useCartContext();

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
      <form>
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
              {genders.map((gender) => (
                <li key={gender.genderId}>
                  <label>
                    <input
                      type="radio"
                      name="gender-filter"
                      value={gender.genderId}
                      onChange={handleGenderChange}
                    />
                    {gender.genderName}
                  </label>
                </li>
              ))}
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
                      type="radio"
                      name="product-filter"
                      value={category.categoryId}
                      onChange={handleCategoryChange}
                    />
                    {category.categoryName}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </form>
    </div>
  );
}
export { ProductsSidebar };
