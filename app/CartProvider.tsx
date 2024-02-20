"use client";
import { SanityValues } from "@/lib/sanity/sanity.config";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type ProductWithQuantity = SanityValues["Product"] & {
  quantity: number;
};

type CartContextType = {
  CartItems: ProductWithQuantity[];
  TotalPrice: number;
  addItemToCart: (product: ProductWithQuantity) => void;
  updateItemQuantityInCart: (product_id: string, newQuantity: number) => void;
  removeItemFromCart: (product_id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CalculateTotalPrice = (CartItems: ProductWithQuantity[]) => {
  const totalPrice = CartItems.reduce((total, item) => {
    return total + item.price! * item.quantity;
  }, 0);

  return totalPrice;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [CartItems, setCartItems] = useState<ProductWithQuantity[]>([]);
  const [TotalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(CalculateTotalPrice(CartItems));
  }, [CartItems]);

  const addItemToCart = (product: ProductWithQuantity) => {
    console.log("added product :", product);

    const updatedCart = [...CartItems, product];
    setCartItems(updatedCart);
  };

  const updateItemQuantityInCart = (
    product_id: string,
    newQuantity: number
  ) => {
    const updatedCart = CartItems.map((item) => {
      if (item._id === product_id) return { ...item, quantity: newQuantity };
      return item;
    });

    setCartItems(updatedCart);
  };

  const removeItemFromCart = (product_id: string) => {
    const updatedCart = CartItems.filter((item) => item._id != product_id);
    setCartItems(updatedCart);
  };

  const value = {
    CartItems,
    TotalPrice,
    addItemToCart,
    updateItemQuantityInCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw Error("No context");

  return context;
};
