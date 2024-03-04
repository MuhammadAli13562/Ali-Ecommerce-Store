"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo3.png";
import { TopLinks } from "../../constants";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

export default function TopBar() {
  useEffect(() => {
    const elem = document.getElementById("topbar");

    const handleScroll = () => {
      if (elem) {
        if (window.scrollY < 50) elem.style.height = "128px";
        else elem.style.height = "65px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="topbar"
      className="flex-center transition-all duration-200 z-50 bg-white top-0 h-32 fixed w-full p-4 border-b-2 border-solid border-gray-200 shadow-xl"
    >
      <div className="flex justify-between items-center w-full md:w-2/3">
        <HomeLink />
        <NavigationLinks />
        <Cart />
      </div>
    </div>
  );
}

const HomeLink = () => {
  return (
    <Link
      className="flex justify-center items-center md:justify-start  "
      href="/"
    >
      <Image src={logo} alt="logo" width={170} />
    </Link>
  );
};

const NavigationLinks = () => {
  return (
    <div className="flex-center ">
      <div className="flex gap-2 md:gap-12 inactive-font-color ">
        {TopLinks &&
          TopLinks.map((mylink) => (
            <Link
              className="hover:underline hover:text-gray-900 text-md md:text-xl font-serif"
              href={mylink.reference}
            >
              {mylink.category}
            </Link>
          ))}
      </div>
    </div>
  );
};
