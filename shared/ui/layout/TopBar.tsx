"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logonew.png";
import { TopLinks } from "../../constants";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  useEffect(() => {
    const elem = document.getElementById("topbar");

    const handleScroll = () => {
      if (elem) {
        if (window.scrollY < 50) elem.style.height = "128px";
        else elem.style.height = "80px";
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
      className="flex-center transition-all duration-200 z-50 bg-white top-0 h-32 fixed w-full p-4 border-b-2 border-solid border-gray-200 shadow-lg"
    >
      <div className="flex justify-around items-center w-full ">
        <HomeLink />
        <div className="flex-center border-2 rounded-xl md:py-2 px-12 bg-gray-100 ">
          <NavigationLinks />
          <Cart />
        </div>
        <AdminDashButton />
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
      <Image src={logo} alt="logo" width={210} />
    </Link>
  );
};

const NavigationLinks = () => {
  return (
    <div className="flex-center gap-2 md:gap-8 inactive-font-color ">
      {TopLinks &&
        TopLinks.map((mylink) => (
          <Link
            className="hover:underline text-black text-md md:text-xl font-sans"
            href={mylink.reference}
          >
            {mylink.category}
          </Link>
        ))}
    </div>
  );
};

const AdminDashButton = () => {
  return (
    <div className="relative flex flex-col bg-gray-200 hover:bg-gray-300  rounded-xl">
      <Link
        href="https://product2demo.sanity.studio"
        target="_blank"
        className="p-2"
      >
        <div className="self-end ">
          {/* <span className=" text-2xl absolute -top-[15px] right-2 transform -rotate-45 ">
            &#8594;
          </span> */}
        </div>
        <span className="">Admin Dashboard</span>
      </Link>
    </div>
  );
};
