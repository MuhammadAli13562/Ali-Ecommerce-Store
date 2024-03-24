import { ProductWithQuantity } from "@/app/CartProvider";
import React from "react";

const CartQuantModifier = ({
  mycartItem,
  updateItemQuantityInCart,
}: {
  mycartItem: ProductWithQuantity;
  updateItemQuantityInCart: (product_id: string, newQuantity: number) => void;
}) => {
  // + //
  const handleAddQuantitiy = () => {
    updateItemQuantityInCart(mycartItem._id, mycartItem.quantity + 1);
  };
  // - //
  const handleSubtractQuantitiy = () => {
    updateItemQuantityInCart(mycartItem._id, mycartItem.quantity - 1);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <span>Quantity : </span>
      <div className="flex">
        <button
          onClick={handleSubtractQuantitiy}
          className="bg-black text-xl text-white w-8"
        >
          -
        </button>
        <div className="min-w-[25px] w-[40px] border-y-2 border-gray-400 bg-gray-200 text-center">
          {mycartItem.quantity}
        </div>
        <button
          onClick={handleAddQuantitiy}
          className="bg-black text-xl text-white w-8"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartQuantModifier;
