"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { SanityValues } from "@/lib/sanity/sanity.config";

const AddCartButton = ({ product }: { product: SanityValues["Product"] }) => {
  const { CartItems, addItemToCart } = useCart();

  const handleAddtoCart = () => {
    const PresentInCart = CartItems.find((Item) => Item._id === product._id);
    if (PresentInCart) {
      toast.info("Already in Cart");
      return;
    }

    addItemToCart({ ...product, quantity: 1 });
    toast.success("Item Added to Cart");
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
