"use client";
import { SanityValues } from "@/lib/sanity/sanity.config";
import { ReactNode, createContext, useContext, useState } from "react";

type CartContextType = {
  CartItems: SanityValues["Product"][];
  addItemToCart: (product: SanityValues["Product"]) => void;
  removeItemFromCart: (product_id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [CartItems, setCartItems] = useState<SanityValues["Product"][]>([]);

  const addItemToCart = (product: SanityValues["Product"]) => {
    const updatedCart = [...CartItems, product];
    setCartItems(updatedCart);
  };

  const removeItemFromCart = (product_id: string) => {
    const updatedCart = CartItems.filter((item) => item._id != product_id);
    setCartItems(updatedCart);
  };

  const value = {
    CartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw Error("No context");

  return context;
};
