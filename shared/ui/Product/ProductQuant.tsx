"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { SanityValues } from "@/lib/sanity/sanity.config";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductQuant = ({ product }: { product: SanityValues["Product"] }) => {
  const { CartItems, addItemToCart } = useCart();
  const [Quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);

  const handleAddtoCart = () => {
    const PresentInCart = CartItems.find((Item) => Item._id === product._id);
    if (PresentInCart) {
      toast("Already in Cart", {
        duration: 1000,
        style: {
          color: "black",
          backgroundColor: "lightgreen",
          marginTop: "70px",
        },
      });
      return;
    }

    addItemToCart({ ...product, quantity: Quantity });
    toast(`${Quantity} Items Added to Cart`, {
      duration: 1000,
      style: {
        backgroundColor: "lightgreen",
        color: "black",
        marginTop: "70px",
      },
    });
  };

  const handleSubtract = () => {
    if (Quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    setPrice(Quantity * product.price!);
  }, [Quantity]);

  return (
    <div className="flex flex-col gap-12">
      {/** Quantity Setter */}
      <div className="flex items-center justify-center  gap-12">
        <div className="text-3xl font-bold">Quantity : </div>
        <div className="flex items-center">
          <button
            className="bg-black text-white text-3xl w-[50px] h-[40px]"
            onClick={handleSubtract}
          >
            -
          </button>
          <div className="bg-gray-100 text-3xl w-[50px] h-[40px] text-center">
            {Quantity}
          </div>
          <button
            className="bg-black text-white text-3xl  w-[50px] h-[40px]"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <div className="text-3xl font-bold">${price}</div>
      </div>
      {/** Add Cart Button */}
      <Button
        onClick={handleAddtoCart}
        className="w-4/5 self-center h-16 text-2xl bg-white border-2 border-solid border-black text-black  hover:bg-gray-200"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductQuant;
