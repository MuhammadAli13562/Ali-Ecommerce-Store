import { useCart } from "@/app/CartProvider";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { Button } from "@/components/ui/button";
import Checkout from "./Checkout";

const CartItemSlot = () => {
  const { CartItems } = useCart();

  return (
    <div className="flex flex-col h-full gap-8">
      <p className="font-bold text-3xl text-white text-center">My Cart</p>
      <div id="Cart Items" className="flex flex-1 flex-col gap-8">
        {CartItems.map((mycartItem) => (
          <div className="flex  bg-yellow-950 rounded-lg">
            <Image
              src={urlFor(mycartItem.image).width(100).url()}
              width={100}
              height={100}
              alt={mycartItem.title || "item"}
            />
            <p>{mycartItem.title}</p>
            <RemoveFromCartButton product_id={mycartItem._id} />
          </div>
        ))}
      </div>
      <Checkout />
    </div>
  );
};

export default CartItemSlot;
