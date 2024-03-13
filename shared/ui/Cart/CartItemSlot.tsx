import { useCart } from "@/app/CartProvider";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import RemoveFromCartButton from "./RemoveFromCartButton";
import CartQuantModifier from "./CartQuantModifier";

const CartItemSlot = () => {
  const { CartItems, updateItemQuantityInCart } = useCart();

  return (
    <div
      className={
        CartItems.length > 0
          ? "flex flex-col gap-8 flex-1 overflow-y-auto pl-4 pr-4 rounded-xl overflow-x-hidden mb-6"
          : "hidden"
      }
    >
      <div id="Cart Items" className={"flex flex-1 flex-col gap-8 mt-12 mb-6"}>
        {CartItems.map((mycartItem) => (
          <div className="flex gap-4 bg-white rounded-lg p-4">
            <div className="">
              <Image
                src={urlFor(mycartItem.image).width(150).height(150).url()}
                width={150}
                height={150}
                alt={mycartItem.title || "item"}
              />
            </div>
            <div className="flex flex-col justify-between pt-2  w-3/5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-black text-xl w-3/4">
                  {mycartItem.title}
                </span>
                <span className=" font-extrabold text-xl text-black">
                  ${mycartItem.price! * mycartItem.quantity}
                </span>
              </div>
              <div className="flex  justify-center gap-12 ">
                <CartQuantModifier
                  mycartItem={mycartItem}
                  updateItemQuantityInCart={updateItemQuantityInCart}
                />
                <RemoveFromCartButton product_id={mycartItem._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemSlot;
