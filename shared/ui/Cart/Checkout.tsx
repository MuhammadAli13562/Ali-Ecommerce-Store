"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { CreateStripeSession } from "@/lib/stripe/CreateSession";
import React, { useTransition } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { CartItems, TotalPrice } = useCart();
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleCheckout = async () => {
    startTransition(async () => {
      const session = await toast.promise(CreateStripeSession(CartItems), {
        pending: "Checking Out",
        success: "Checked Out",
        error: "Error Checking Out",
      });
      setTimeout(() => {
        router.push(session.url);
      }, 1200);
    });
  };

  return (
    <div
      className={
        CartItems.length > 0 ? "flex flex-col border-dashed border-t-2 border-black" : "hidden"
      }
    >
      <div className="h-12"></div>
      <div id="Checkout" className=" flex justify-around mb-6">
        <div id="Total Amount" className="text-black flex flex-col items-center">
          <span className="text-3xl font-bold font-mono">Total:</span>
          <span className="text-2xl ">${TotalPrice}</span>
        </div>
        <Button
          onClick={handleCheckout}
          className=" text-2xl font-mono p-6 text-black border-solid border-black border-2 bg-gray-300 hover:bg-gray-400  disabled:bg-gray-800"
          disabled={isPending}
        >
          GO TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
