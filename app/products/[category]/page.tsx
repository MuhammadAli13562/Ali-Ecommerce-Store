import { getDataByGender } from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/Product/ProductGrid";
import SelectedProduct from "@/shared/ui/Product/SelectedProduct";
import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  const category = params.category;

  if (category != "men" && category != "women")
    return <div className="flex-center">Invalid Category !</div>;

  const Products = await getDataByGender(category);

  return (
    <div className="col-center gap-12 ">
      <p className="text-3xl font-bold">{category.toUpperCase()} </p>
      <SelectedProduct gender={category} Products={Products} />
    </div>
  );
};

export default page;
