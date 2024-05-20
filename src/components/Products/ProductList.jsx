import { useData } from "../../context/DataContext";
import { React, useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { ProductsSidebar } from "./ProductsSidebar";
import "./styles/Products.css";

function ProductList() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { products, loading, error } = useData();

  // useEffect(() => {
  //   const closeDropdowns = () => {
  //     setShowDropdown(false);
  //   };

  //   document.addEventListener("click", closeDropdowns);

  //   return () => {
  //     document.removeEventListener("click", closeDropdowns);
  //   };
  // }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <main>
        <div id="products-main-wrapper">
          <aside id="asideProducts">
            <ProductsSidebar toggleDropdown={setShowDropdown} />
          </aside>

          <div id="products-div">
            <div id="products-header">
              <h2>All Products</h2>
            </div>
            <div id="products-wrapper">
              {products.map((product) => {
                return (
                  <article className="productCard" key={product.productId}>
                    <ProductCard product={product} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export { ProductList };
