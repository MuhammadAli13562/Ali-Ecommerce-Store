"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CreateStripeSession } from "@/lib/stripe/CreateSession";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { CartItems } = useCart();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleCheckout = async () => {
    startTransition(async () => {
      try {
        const session = await CreateStripeSession(CartItems);
        console.log("session : ", session);
        router.push(session.url);

        toast({
          title: "Checkout Successful !",
          variant: "default",
        });
      } catch (error: any) {
        toast({
          title: "Error Checking Out !",
          variant: "destructive",
          description: error.message,
        });
      }
    });
  };

  return (
    <div id="Checkout" className=" flex-center mb-2">
      <Button
        onClick={handleCheckout}
        className="w-48 text-xl rounded-2xl font-bold bg-orange-900"
        disabled={isPending}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Checkout;
