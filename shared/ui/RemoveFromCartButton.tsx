"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const RemoveFromCartButton = ({ product_id }: { product_id: string }) => {
  const { removeItemFromCart } = useCart();
  const { toast } = useToast();

  const handleRemoveFromCart = () => {
    removeItemFromCart(product_id);
    toast({
      title: "Item Removed From Cart",
    });
  };
  return (
    <Button onClick={handleRemoveFromCart} className="bg-red-700">
      Remove
    </Button>
  );
};

export default RemoveFromCartButton;
