// import { DataContext } from "../../context/DataContext";
import { React, useState, useEffect, useContext } from "react";
import { ProductCard } from "./ProductCard";
import { ProductsSidebar } from "./ProductsSidebar";
import axios from "axios";
import handleFetchError from "../../functions/handleFetchError";
import "./styles/Products.css";

function ProductList() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("products from api =>", products);

  // const context = useContext(DataContext);
  // const products = context.
  useEffect(() => {
    const fetchProductsApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products`
        );
        setProducts(response.data);
      } catch (error) {
        handleFetchError(error, setError);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategoriesApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );
        setCategories(response.data);
      } catch (error) {
        handleFetchError(error, setError);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsApi();
    fetchCategoriesApi();

    const closeDropdowns = () => {
      setShowDropdown(false);
    };

    document.addEventListener("click", closeDropdowns);

    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <main>
        <div id="products-main-wrapper">
          <aside id="asideProducts">
            <ProductsSidebar
              toggleDropdown={setShowDropdown}
              categories={categories}
              loading={loading}
              error={error}
            />
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
