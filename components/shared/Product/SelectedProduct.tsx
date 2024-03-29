"use client";

import { SanityValues } from "@/lib/sanity/sanity.config";
import { MenCategories, WomenCategories } from "@/lib/sanity/schemas";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import ProductGrid from "./ProductGrid";

const defaultOption = { label: "All", value: "All" };
type OptionType = {
  label: string;
  value: string;
};

const SelectedProduct = ({
  Products,
  gender,
}: {
  Products: SanityValues["Product"][];
  gender: string;
}) => {
  const [selectedOption, setSelectedOption] =
    useState<OptionType>(defaultOption);
  const selectOptions = gender === "men" ? MenCategories : WomenCategories;
  const options = selectOptions.map((opt) => ({
    value: opt.toLowerCase(),
    label: opt,
  }));

  const SelectedProducts =
    selectedOption.value === "All"
      ? Products
      : Products.filter((prod) => prod.category === selectedOption.value);

  console.log("Select Rerendered ");
  console.log("SelectedOption :", selectedOption);

  useEffect(() => {
    console.log("in Use Effect");
  }, [selectedOption]);

  return (
    <div className="w-full ">
      <div className="absolute right-1/4 top-48">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption as any}
          options={[{ label: "All", value: "All" }, ...options] as any}
          className=" w-32 lg:w-36 "
        />
      </div>
      {SelectedProducts.length === 0 ? (
        <div className="col-center text-4xl h-[30vh]">No Items Found</div>
      ) : (
        <ProductGrid Products={SelectedProducts} />
      )}
    </div>
  );
};

export default SelectedProduct;
