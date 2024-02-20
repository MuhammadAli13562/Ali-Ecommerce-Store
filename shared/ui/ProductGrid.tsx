import { SanityValues } from "@/lib/sanity/sanity.config";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import React from "react";
import AddCartButton from "./AddCartButton";

const ProductGrid = ({ Products }: { Products: SanityValues["Product"][] }) => {
  return (
    <div className="flex justify-center flex-wrap w-full gap-4 ">
      {Products.map((product) => (
        <div className="rounded-lg p-4 bg-white w-[400px]   flex flex-col justify-center items-center">
          <Image
            src={
              (product?.image && urlFor(product.image).width(200).url()) || ""
            }
            loading="eager"
            alt={product.description || "alt"}
            width={200}
            height={200}
            className="flex-1 "
          />
          <div className="flex flex-col justify-center items-center h-1/4">
            <h1 className="text-black">{product.title}</h1>
            <p className="text-sm text-amber-600 text-center">
              {product.description}
            </p>
            <span className="font-bold text-lg text-slate-800">
              ${product.price}
            </span>
          </div>
          <AddCartButton product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
