import { SanityValues } from "@/lib/sanity/sanity.config";
import urlFor from "@/lib/sanity/urlFor";
import Image from "next/image";
import React from "react";
import ProductQuant from "./ProductQuant";
import PeopleAlsoLiked from "./PeopleAlsoLiked";
import Link from "next/link";
import { SizeBoundary } from "../utils";

const ProductDetails = ({ Product }: { Product: SanityValues["Product"] }) => {
  console.log("details : ", Product);
  const gender = Product.Gender;

  return (
    <div className="flex flex-col">
      <Link
        href={`/products/${gender}/all`}
        className="absolute  ml-10 p-0 -mt-12 2xl:mt-0"
      >
        <div className="flex items-center gap-2 self-start">
          <span className="text-3xl">&lArr;</span>
          <span className="hover:underline">ALL {gender?.toUpperCase()}</span>
        </div>
      </Link>

      <div className="flex flex-col gap-32">
        <div className="w-full flex flex-col xl:flex-row items-center  gap-8 justify-center ">
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
          <div className="bg-gray-100 border-2 border-gray-300 shadow-lg border-solid md:w-[660px] h-[700px] w-[600px] flex flex-col gap-12 p-4">
            <div className="text-3xl font-bold text-center">
              {Product.title}
            </div>
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
    </div>
  );
};

export default ProductDetails;
