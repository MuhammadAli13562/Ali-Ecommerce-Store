import { SanityValues } from "@/lib/sanity/sanity.config";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import React from "react";
import ProductQuant from "./ProductQuant";
import PeopleAlsoLiked from "./PeopleAlsoLiked";

const ProductDetails = ({ Product }: { Product: SanityValues["Product"] }) => {
  console.log("details : ", Product);

  return (
    <div className="flex flex-col gap-32">
      <div className="w-full flex gap-8 justify-center">
        <Image
          src={
            (Product?.image &&
              urlFor(Product.image).width(600).height(700).url()) ||
            ""
          }
          width={600}
          height={700}
          alt={`${Product.title}`}
          className="border-2 border-gray-100 shadow-lg  "
        />
        <div className="bg-gray-100 border-2 border-gray-300 shadow-lg border-solid w-1/3 flex flex-col gap-12 p-4">
          <div className="text-3xl font-bold text-center">{Product.title}</div>
          <div className=" flex justify-center ">
            <div className="w-4/5 text-lg">
              <span className="font-bold">Description</span> :{" "}
              {Product.description}
            </div>
          </div>
          <ProductQuant product={Product} />
        </div>
      </div>
      <PeopleAlsoLiked
        category={Product.category || ""}
        product_current={Product}
      />
    </div>
  );
};

export default ProductDetails;
