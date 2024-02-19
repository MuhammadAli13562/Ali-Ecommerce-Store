"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { SanityValues } from "@/lib/sanity/sanity.config";

const AddCartButton = ({ product }: { product: SanityValues["Product"] }) => {
  const { addItemToCart } = useCart();
  const { toast } = useToast();

  const handleAddtoCart = () => {
    addItemToCart(product);
    toast({
      title: "Item Added to Cart",
    });
  };

  return <Button onClick={handleAddtoCart}>Add to Cart</Button>;
};

export default AddCartButton;
