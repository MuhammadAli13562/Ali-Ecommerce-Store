"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { SanityValues } from "@/lib/sanity/sanity.config";

const AddCartButton = ({ product }: { product: SanityValues["Product"] }) => {
  const { CartItems, addItemToCart } = useCart();

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

    addItemToCart({ ...product, quantity: 1 });
    toast("Item Added to Cart", {
      duration: 1000,
      style: {
        backgroundColor: "lightgreen",
        color: "black",
        marginTop: "70px",
      },
    });
  };

  return (
    <Button
      className="bg-gray-200 hover:bg-gray-300 hover:text-black text-black border-1 border-solid border-gray-300 "
      onClick={handleAddtoCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddCartButton;
