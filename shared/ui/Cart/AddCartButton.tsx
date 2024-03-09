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
        style: { color: "black", backgroundColor: "lightgreen" },
      });
      return;
    }

    addItemToCart({ ...product, quantity: 1 });
    toast("Item Added to Cart", {
      style: {
        backgroundColor: "lightgreen",
        color: "black",
        marginTop: "60px",
      },
    });
  };

  return (
    <Button className="" onClick={handleAddtoCart}>
      Add to Cart
    </Button>
  );
};

export default AddCartButton;
