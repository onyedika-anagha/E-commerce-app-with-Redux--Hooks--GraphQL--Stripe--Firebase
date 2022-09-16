import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  setItems: () => [],
  isCartOpen: false,
  setIsCartOpen: () => {},
});
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    items,
    setItems,
    isCartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};