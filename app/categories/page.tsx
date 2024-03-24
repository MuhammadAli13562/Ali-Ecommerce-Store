import ProductGrid from "@/components/shared/ui/Product/ProductGrid";
import { getAllData } from "@/lib/sanity/getallData";
import React from "react";
import Skeleton from "react-loading-skeleton";

const page = async () => {
  const Products = await getAllData();

  return (
    <div className="col-center gap-12 ">
      <p className="text-3xl font-bold">All Products</p>
      {<ProductGrid Products={Products} /> || <Skeleton />}
    </div>
  );
};

export default page;
