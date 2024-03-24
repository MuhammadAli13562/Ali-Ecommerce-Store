"use client";

import {
  MenCategoriesOptions,
  WomenCategoriesOptions,
} from "@/lib/sanity/schemas";
import { usePathname, useRouter } from "next/navigation";
import Select from "react-select";

const Selector = ({ gender }: { gender: string }) => {
  const router = useRouter();
  const path = usePathname();
  const genderedOptions =
    gender === "men" ? MenCategoriesOptions : WomenCategoriesOptions;
  const Options = [{ value: "all", label: "All" }, ...genderedOptions];

  const handleChange = (e: any) => {
    router.push(`/categories/${gender}/${e.value}`);
  };

  const category = path.split("/").pop() || "all";
  const label = category?.charAt(0).toUpperCase() + category?.slice(1);

  const defaultOption = { value: category, label };

  return (
    <div>
      <Select
        defaultValue={defaultOption}
        onChange={handleChange}
        options={Options}
      />
    </div>
  );
};

export default Selector;
