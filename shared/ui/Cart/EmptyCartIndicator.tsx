import { useCart } from "@/app/CartProvider";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

const EmptyCartIndicator = ({
  setShowCart,
}: {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}) => {
  const { CartItems } = useCart();
  return (
    <div
      className={
        CartItems.length == 0
          ? "flex flex-col items-center justify-center place-center w-full gap-12 "
          : "hidden"
      }
    >
      <p className="text-5xl text-gray-400 font-bold ">Cart is Empty</p>
      <Button
        className="bg-gray-500 hover:text-black text-black hover:bg-gray-700"
        onClick={() => {
          setShowCart(false);
          document.body.style.overflow = "";
        }}
      >
        Keep Browsing
      </Button>
    </div>
  );
};

export default EmptyCartIndicator;
