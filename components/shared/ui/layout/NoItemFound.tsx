"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/animation/noitemfound.json";

const NoItemFound = () => {
  return (
    <div className="w-[200px] sm:w-[300px] col-center mt-32">
      <Lottie animationData={animationData} />
      <span className="text-xl font-bold text-gray-400">No Items Found</span>
    </div>
  );
};

export default NoItemFound;
