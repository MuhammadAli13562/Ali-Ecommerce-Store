import { getAllData } from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/Product/ProductGrid";
import SelectedProduct from "@/shared/ui/Product/SelectedProduct";
import NoItemFound from "@/shared/ui/layout/NoItemFound";
import React from "react";

const page = async ({
  params,
}: {
  params: { gender: string; category: string };
}) => {
  const category = params.category;
  const gender = params.gender;

  const Products = await getAllData();
  let FilteredProducts =
    category === "all"
      ? Products.filter((prod) => prod.Gender === gender)
      : Products.filter(
          (prod) => prod.Gender === gender && prod.category === category
        );
  FilteredProducts = FilteredProducts.sort((a: any, b) =>
    a.category?.localeCompare(b.category)
  );

  return (
    <div className="col-center gap-12 ">
      <div className="flex gap-2 md:gap-8 text-xl  lg:text-3xl self-start pl-6 lg:p-0 lg:self-center font-bold">
        <span>{category.toUpperCase()}</span>
      </div>
      {FilteredProducts.length === 0 ? (
        <NoItemFound />
      ) : (
        <ProductGrid Products={FilteredProducts} />
      )}
    </div>
  );
};

export default page;
