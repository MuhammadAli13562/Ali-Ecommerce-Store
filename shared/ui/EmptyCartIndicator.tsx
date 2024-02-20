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
          ? "flex flex-col items-center justify-center mt-48 "
          : "hidden"
      }
    >
      <p className="text-3xl font-bold p-4">Cart is Empty</p>
      <Button
        className="bg-orange-800 hover:text-black text-black hover:bg-orange-900"
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
