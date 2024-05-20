import { createContext, useState } from "react";
import { useData } from "./DataContext";

export const CartContext = createContext({
  cartProducts: [],
  getProductCartQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  clearCart: () => {},
  getTotalCost: () => {},
});
