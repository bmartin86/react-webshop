// import { DataContext } from "../../context/DataContext";
import { React, useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductCard } from "./ProductCard";
import { ProductsSidebar } from "./ProductsSidebar";
import axios from "axios";
import handleFetchError from "../../functions/handleFetchError";
import "./styles/Products.css";

function ProductList() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { filters } = useContext(CartContext);

  useEffect(() => {
    const fetchProductsApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products`
        );
        const fetchedProducts = response.data;

        const structuredProducts = fetchedProducts.map((product) => ({
          ...product,
          genderId: product.gender.genderId,
          categoryId: product.category.categoryId,
        }));
        setProducts(structuredProducts);
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

    const fetchCGendersApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/gender`
        );
        setGenders(response.data);
      } catch (error) {
        handleFetchError(error, setError);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsApi();
    fetchCategoriesApi();
    fetchCGendersApi();

    const closeDropdowns = () => {
      setShowDropdown(false);
    };

    document.addEventListener("click", closeDropdowns);

    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  console.log("products =>", products);

  const filteredProducts = products.filter((product) => {
    const matchesGender =
      filters.genderId.length === 0 ||
      filters.genderId.includes(product.genderId.toString());
    const matchesCategory =
      filters.categoriesId.length === 0 ||
      filters.categoriesId.includes(product.categoryId.toString());
    return matchesGender && matchesCategory;
  });

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
              genders={genders}
              loading={loading}
              error={error}
            />
          </aside>

          <div id="products-div">
            <div id="products-header">
              <h2>All Products</h2>
            </div>
            <div id="products-wrapper">
              {filteredProducts.map((product) => {
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
