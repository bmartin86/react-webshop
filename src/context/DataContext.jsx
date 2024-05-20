// src/context/DataContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import handleFetchError from "../functions/handleFetchError";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
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

    const fetchCategories = async () => {
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

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        categories,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
