import Image from "next/image";
import React from "react";
import logo from "@/public/delivery-logo.svg";
import Link from "next/link";
import { BottomLinks } from "../../constants";

const BottomBar = () => {
  return (
    <div className=" flex flex-col justify-center items-center  w-full mt-12">
      <div className="flex w-full bg-black   border-t-2  border-t-gray-700 ">
        <div className="mt-6 flex gap-12">
          <Link href="/">
            <div className="flex-center ml-4">
              <Image src={logo} width={80} alt="logo" />
              <span className="font-bold  text-yellow-900">toShip</span>
            </div>
          </Link>
          <div className="flex flex-col">
            {BottomLinks.map((link) => (
              <Link className="text-gray-400 hover:underline " href={link.ref}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
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
