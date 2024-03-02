import { SanityValues } from "@/lib/sanity/sanity.config";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import React from "react";
import AddCartButton from "./Cart/AddCartButton";

const ProductGrid = ({ Products }: { Products: SanityValues["Product"][] }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center flex-wrap w-2/3 gap-6">
        {Products.map((product) => (
          <div className="border-2 border-solid border-gray-400 hover:border-black rounded-lg bg-white  h-auto py-2  flex flex-col justify-between items-center">
            <div className=" flex flex-col scale-[0.8] justify-center items-center">
              <Image
                src={
                  (product?.image &&
                    urlFor(product.image).width(250).height(250).url()) ||
                  ""
                }
                loading="eager"
                alt={product.description || "alt"}
                width={250}
                height={250}
                className="flex-1 "
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-black">{product.title}</h1>
                <p className="text-sm text-amber-600 text-center">{}</p>
                <span className="font-bold text-lg text-slate-800">
                  ${product.price}
                </span>
              </div>
              <AddCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
