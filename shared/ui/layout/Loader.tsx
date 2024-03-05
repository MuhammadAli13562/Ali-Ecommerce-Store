"use client";

import Lottie from "lottie-react";
import React from "react";
import { BeatLoader } from "react-spinners";
import animation from "@/public/animation/loadingsloth.json";

const Loader = () => {
  return (
    <div className="place-center ">
      <Lottie animationData={animation} height={"100%"} width={"100%"} loop />
    </div>
  );
};

export default Loader;
