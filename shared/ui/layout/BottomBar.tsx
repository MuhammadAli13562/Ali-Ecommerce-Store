import Image from "next/image";
import React from "react";
import logo from "@/public/logo3.png";
import { credits } from "@/shared/constants/constants";

const BottomBar = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 w-full mt-12 bg-black">
      <div className="flex bg-black w-full text-gray-400 justify-center mt-12 text-xl">
        <span className="pr-4"> Powered by :</span>
        {credits.map((cred) => (
          <div>{cred}</div>
        ))}
      </div>
      <div> All Rights Reserved - 2024</div>
      <div
        id="base bar"
        className="p-4 w-full border-t-2 border-black bg-black"
      >
        <p className="text-center font-mono text-white text-lg ">
          Built with <span>&#x2764;</span> by Ali
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
