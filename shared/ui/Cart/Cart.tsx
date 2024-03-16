"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Cartlogo from "@/public/cart.svg";
import CartItemSlot from "./CartItemSlot";
import Checkout from "./Checkout";
import { useCart } from "@/app/CartProvider";
import EmptyCartIndicator from "./EmptyCartIndicator";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { CartItems } = useCart();
  return (
    <div className="w-24 flex-center ">
      {/* Cart Trigger Button */}
      <div className="flex flex-col items-center justify-center">
        {/**ticker red */}
        <div
          className={
            CartItems.length
              ? "bg-red-700 absolute mb-8 text-center text-white rounded-full w-6 scale-75"
              : "hidden"
          }
        >
          {CartItems.length}
        </div>

        <Button
          className=" bg-transparent hover:bg-gray-200"
          onClick={() => {
            setShowCart(!showCart);
            document.body.style.overflow = "hidden";
          }}
        >
          <Image src={Cartlogo} alt="cart" width={30} className="" />
        </Button>
      </div>
      {/* Cart Tray */}
      <CartTray showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

const CartTray = ({ showCart, setShowCart }: any) => {
  return (
    <>
      {showCart && (
        <div
          id="Cart Backdrop"
          onClick={() => {
            setShowCart(false);
            document.body.style.overflow = "";
          }}
          className="fixed z-10 bg-black opacity-70 top-0 left-0 w-full h-full"
        ></div>
      )}
      <div
        id="Cart Content"
        className={`flex flex-col w-full sm:w-[480px]  fixed transition-transform duration-300 transform rounded-sm right-0 h-screen bg-white z-20 top-0 ${
          showCart ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div
          className="flex justify-between border-b-2 border-gray-300 pb-6 shadow-xl"
          onClick={() => {
            setShowCart(false);
            document.body.style.overflow = "";
          }}
        >
          <p className="font-bold flex-1 text-4xl mt-4 font-sans text-black text-center">
            Shopping Cart
          </p>
          <Button className=" bg-white border-2 border-black mr-2 text-xl  text-black mt-2 rounded-3xl hover:text-white">
            x
          </Button>
        </div>
        <CartItemSlot />
        <Checkout />
        <EmptyCartIndicator setShowCart={setShowCart} />
      </div>
    </>
  );
};

export default Cart;
