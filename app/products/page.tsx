import { getAllData } from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/Product/ProductGrid";
import React from "react";

const page = async () => {
  const Products = await getAllData();

  return (
    <div className="col-center gap-12 ">
      <p className="text-3xl font-bold">All Products</p>
      <ProductGrid Products={Products} />
    </div>
  );
};

export default page;
