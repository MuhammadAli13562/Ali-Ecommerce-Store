"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navdot = ({ category }: { category: string }) => {
  const path = usePathname();
  const pathArray = path.split("/");
  let pathCategory =
    pathArray.length === 2
      ? pathArray[1] === "products"
        ? "all"
        : ""
      : pathArray[2];

  const showDot = category.toLowerCase() === pathCategory;

  return (
    <div className={`"absolute place-center mt-4  " ${!showDot && "hidden"}`}>
      <span className="text-5xl  text-slate-500">.</span>
    </div>
  );
};

export default Navdot;
