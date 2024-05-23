import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Icon } from "@iconify/react";
import "./styles/ProductsSidebar.css";

function ProductsSidebar({ toggleDropdown, categories, genders }) {
  console.log("categories", categories);
  console.log("genders", genders);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [categoryIcon, setCategoryIcon] = useState("ep:arrow-down-bold");
  const [productIcon, setProductIcon] = useState("ep:arrow-down-bold");
  //const { filters, setFilters } = useContext(CartContext);
  const { filters, handleCheckboxChange } = useContext(CartContext);

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

  const handleGenderChange = (e) => {
    handleCheckboxChange("genderId", e.target.value);
  };

  const handleCategoryChange = (e) => {
    handleCheckboxChange("categoriesId", e.target.value);
  };

  useEffect(() => {
    console.log("filters =>", filters);
  }, [filters]);

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
                      type="checkbox"
                      name="gender-filter"
                      value={gender.genderId}
                      onChange={handleGenderChange}
                      checked={filters.genderId.includes(
                        gender.genderId.toString()
                      )}
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
                      type="checkbox"
                      name="product-filter"
                      value={category.categoryId}
                      onChange={handleCategoryChange}
                      checked={filters.categoriesId.includes(
                        category.categoryId.toString()
                      )}
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
