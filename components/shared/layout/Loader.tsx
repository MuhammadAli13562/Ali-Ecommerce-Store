"use client";

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24">
      <div className="w-2/3">
        <SkeletonTheme baseColor="rgb(243 ,244, 246)" highlightColor="white">
          <div className="flex gap-6 flex-wrap justify-center">
            {new Array(8).fill(0).map((index) => (
              <div
                key={index}
                className=" bg-white border-0 border-solid border-gray rounded-xl w-[270px] h-[430px] flex flex-col justify-center items-center"
              >
                <div className="flex-1 bg-gray-100 w-5/6 m-2 rounded-xl"></div>
                <Skeleton count={1} width="180px" height="15px" />
                <Skeleton count={1} width="80px" height="15px" />
              </div>
            ))}
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default Loader;
