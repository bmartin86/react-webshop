import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import handleFetchError from "../functions/handleFetchError";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // --------- BACKEND API ----------
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ----------- Filters ---------------
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [query, setQuery] = useState("");

  // // ----------- Input Filter -----------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  useEffect(() => {
    const fetchProductsApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products`
        );
        const fetchedProducts = response.data.map((product) => ({
          ...product,
          genderId: product.gender.genderId,
          categoryId: product.category.categoryId,
          genderName: product.gender.genderName,
          categoryName: product.category.categoryName,
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsApi();
  }, []);

  useEffect(() => {
    function filterProducts() {
      let filtered = products;

      if (query) {
        const lowerCaseQuery = query.toLowerCase();
        filtered = filtered.filter(
          (product) =>
            product.productName.toLowerCase().includes(lowerCaseQuery) ||
            product.categoryName.toLowerCase().includes(lowerCaseQuery) ||
            product.genderName.toLowerCase().includes(lowerCaseQuery)
        );
      }

      if (selectedGender) {
        filtered = filtered.filter(
          (product) => product.genderId === parseInt(selectedGender)
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter(
          (product) => product.categoryId === parseInt(selectedCategory)
        );
      }

      setFilteredProducts(filtered);
    }

    filterProducts();
  }, [products, query, selectedGender, selectedCategory]);

  // ----------- Local Storage ------------------
  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const clearCartProducts = () => {
    console.log("Clearing cart products from local storage and state");
    setCartProducts([]); // Clear state
    localStorage.removeItem("cartProducts"); // Clear local storage
  };

  // ------------- Cart Functions ------------------
  function getProductQuantity(productSizeQuantityId) {
    const product = cartProducts.find(
      (product) => product.id.productSizeQuantityId === productSizeQuantityId
    );
    return product ? product.quantity : 0;
  }

  function addOneToCart(id, product) {
    const productSizeQuantityId = id.productSizeQuantityId;
    const quantity = getProductQuantity(productSizeQuantityId);

    // Find the available quantity for the selected product size
    const availableQuantity = product.productSizeQuantities.find(
      (size) => size.productSizeQuantityId === productSizeQuantityId
    )?.availableQuantity;

    if (availableQuantity === undefined) {
      console.error(
        "Product size not found or available quantity not specified"
      );
      return;
    }

    if (quantity < availableQuantity) {
      if (quantity === 0) {
        // Product not in cart
        setCartProducts([
          ...cartProducts,
          {
            id: id,
            quantity: 1,
            product: product,
          },
        ]);
      } else {
        // Product is in cart, quantity++
        setCartProducts(
          cartProducts.map((item) =>
            item.id.productSizeQuantityId === productSizeQuantityId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    } else {
      alert(
        `Insufficient quantity. Available quantity for this item: ${availableQuantity}.`
      );
    }
  }

  function removeOneFromCart(id) {
    const productSizeQuantityId = id.productSizeQuantityId;
    const quantity = getProductQuantity(productSizeQuantityId);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productData = cartItem.product;
      let price = parseFloat(productData.productPrice); // Ensure the price is a number

      // Apply discount if present
      if (productData.discountPercentage) {
        const discount = (price * productData.discountPercentage) / 100;
        price = price - discount;
      }

      totalCost += price * cartItem.quantity;
    });

    return totalCost.toFixed(2);
  }

  const calculateDiscountedPrice = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
  };

  // --------------- BACKEND API -----------------

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

  const fetchGendersApi = async () => {
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

  const contextValue = {
    // backend api
    fetchCategoriesApi,
    fetchGendersApi,
    loading,
    setLoading,
    error,
    setError,
    // cart
    items: cartProducts,
    clearCartProducts,
    setCartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    calculateDiscountedPrice,
    // filters
    query,
    selectedCategory,
    selectedGender,
    handleInputChange,
    handleCategoryChange,
    handleGenderChange,
    // data
    products,
    filteredProducts,
    setFilteredProducts,
    setProducts,
    categories,
    setCategories,
    genders,
    setGenders,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// export default CartProvider;

export const useCartContext = () => useContext(CartContext);
