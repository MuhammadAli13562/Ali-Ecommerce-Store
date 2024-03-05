import { getAllData } from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/Product/ProductGrid";
import SelectedProduct from "@/shared/ui/Product/SelectedProduct";
import React from "react";

const page = async ({
  params,
}: {
  params: { gender: string; category: string };
}) => {
  const category = params.category;
  const gender = params.gender;

  const Products = await getAllData();
  const FilteredProducts =
    category === "all"
      ? Products.filter((prod) => prod.Gender === gender)
      : Products.filter(
          (prod) => prod.Gender === gender && prod.category === category
        );
  return (
    <div className="col-center gap-12 ">
      <div className="flex gap-8 text-xl md:text-3xl self-start pl-8 md:p-0 md:self-center font-bold">
        <span>{gender.toUpperCase()}</span>
        <span>-</span>
        <span>{category.toUpperCase()}</span>
      </div>
      <ProductGrid Products={FilteredProducts} />
    </div>
  );
};

export default page;
