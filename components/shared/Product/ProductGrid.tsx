import { SanityValues } from "@/lib/sanity/sanity.config";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { nameToSlug } from "@/lib/functions/SlugNameconversion";
import ScrollToTop from "../layout/scrollToTop";

const ProductGrid = ({ Products }: { Products: SanityValues["Product"][] }) => {
  console.log("grid : ", Products);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center flex-wrap w-2/3 gap-6">
        {Products.map((product, index) => {
          const slug = nameToSlug(product.title || "");
          return (
            <div
              key={index}
              className="  transition-all duration-200 border-2 border-solid border-gray-200 hover:border-black rounded-lg bg-white  h-auto py-2  col-center"
            >
              <Link href={`/product/${slug}`} className="flex flex-col gap-8">
                <ScrollToTop />
                <div className=" flex flex-col p-2 justify-center items-center ">
                  <Image
                    src={
                      (product?.image && urlFor(product.image).width(600).height(700).url()) || ""
                    }
                    loading="eager"
                    alt={product.description || "alt"}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-black">{product.title}</h1>
                    <p className="text-sm text-amber-600 text-center">{}</p>
                    <span className="font-bold text-lg text-slate-800">${product.price}</span>
                  </div>
                </div>
              </Link>
              {/* <div className="mt-2">
                <AddCartButton product={product} />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
