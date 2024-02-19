"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Cartlogo from "@/public/cart.svg";
import CartItemSlot from "./CartItemSlot";

const CartDialog = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="w-52 flex-center">
      <Button
        className="bg-black"
        onClick={() => {
          setShowCart(!showCart);
          document.body.style.overflow = "hidden";
        }}
      >
        <Image src={Cartlogo} alt="cart" width={30} className="" />
      </Button>
      <>
        {showCart && (
          <div
            id="Modal"
            onClick={() => {
              setShowCart(false);
              document.body.style.overflow = "";
            }}
            className="fixed z-10 bg-black opacity-30 top-0 left-0 w-full h-full"
          ></div>
        )}
        <div
          id="Modal Content"
          className={`fixed transition-transform duration-300 transform rounded-xl right-0 h-screen w-96  bg-black z-20 top-0 ${
            showCart ? "translate-x-0" : "translate-x-full "
          }`}
        >
          <div
            className="flex justify-end "
            onClick={() => {
              setShowCart(false);
              document.body.style.overflow = "";
            }}
          >
            <Button className="absolute">X</Button>
          </div>
          <CartItemSlot />
        </div>
      </>
    </div>
  );
};

export default CartDialog;
