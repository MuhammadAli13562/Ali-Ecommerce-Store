"use client";

import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";

const RemoveFromCartButton = ({ product_id }: { product_id: string }) => {
  const { removeItemFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeItemFromCart(product_id);
  };
  return (
    <Button
      onClick={handleRemoveFromCart}
      className="bg-white hover:bg-red-400  text-sm font-medium text-black self-end"
    >
      REMOVE
    </Button>
  );
};

export default RemoveFromCartButton;
