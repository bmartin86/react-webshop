import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  calculateDiscountedPrice: () => {},
  // cartItemsCount:
});

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

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
        // Product is not in cart, add it
        setCartProducts([
          ...cartProducts,
          {
            id: id, // Use id directly
            quantity: 1,
            product: product,
          },
        ]);
      } else {
        // Product is in cart, increment its quantity
        setCartProducts(
          cartProducts.map((item) =>
            item.id.productSizeQuantityId === productSizeQuantityId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    } else {
      // Exceeds available quantity
      alert(`Cannot add more than ${availableQuantity} of this item.`);
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

  const totalItemsInCart = (items) => {};

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    calculateDiscountedPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
