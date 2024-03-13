import { getAllData } from "@/lib/sanity/getallData";
import React from "react";
import ProductGrid from "./ProductGrid";
import { SanityValues } from "@/lib/sanity/sanity.config";

const PeopleAlsoLiked = async ({
  category,
  product_current,
}: {
  category: string;
  product_current: SanityValues["Product"];
}) => {
  const Products = await getAllData();
  let filteredProducts = Products.filter(
    (prod) =>
      prod.category === category &&
      prod._id !== product_current._id &&
      prod.Gender === product_current.Gender
  );

  filteredProducts = filteredProducts.slice(0, 4);

  if (filteredProducts.length === 0) return <></>;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-3xl  font-bold w-3/5">
        <span>People Also Liked :</span>
      </div>
      <ProductGrid Products={filteredProducts} />
    </div>
  );
};

export default PeopleAlsoLiked;
