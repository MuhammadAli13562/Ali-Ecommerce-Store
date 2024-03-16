"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logonew.png";
import { TopLinks } from "../../constants";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { getIndexFromPath } from "@/lib/functions/getIndexFromPath";

export default function TopBar() {
  useEffect(() => {
    const elem = document.getElementById("topbar");

    const handleScroll = () => {
      if (elem) {
        if (window.scrollY < 50) {
          elem.style.height = "120px";
        } else {
          elem.style.height = "80px";
        }
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
      className=" select-none flex-center transition-all duration-200 z-50  bg-white top-0 h-32 fixed w-full p-4 border-b-2 border-solid border-gray-200 shadow-lg"
    >
      <div className="flex justify-around items-center w-full ">
        <HomeLink />
        <NavigationLinks />
        <div className="flex flex-col md:flex-row">
          <Cart />
          <AdminDashButton />
        </div>
      </div>
    </div>
  );
}

const HomeLink = () => {
  return (
    <Link
      className="hidden md:flex  justify-center items-center md:justify-start  p-4 rounded-full "
      href="/"
    >
      <Image src={logo} alt="logo" width={210} />
    </Link>
  );
};

const NavigationLinks = () => {
  const maskControls = useAnimationControls();
  const path = usePathname();
  const width = 100;

  const handleClickLink = (index: number) => {
    maskControls.start({
      x: (index + 1) * width - width * 2.5,
      opacity: index === -1 ? 0 : 0.4,
      transition: {
        duration: index === -1 ? 0 : 0.2,
      },
    });
  };

  useEffect(() => {
    const newindex = getIndexFromPath(path);
    handleClickLink(newindex);
  }, [path]);

  return (
    <div
      id="midtopbar"
      className="flex-center scale-[0.85] lg:scale-100 border-0 border-gray-300 tansition-all duration-200  bg-gray-100 "
    >
      <div className="flex-center relative border-0 border-gray-300   px-2 py-[6px]">
        {TopLinks &&
          TopLinks.map((mylink, index) => (
            <div className="relative  flex-center">
              <Link
                className="  rounded-xl w-[100px] flex-center text-black  text-md md:text-lg font-sans"
                onClick={() => handleClickLink(index)}
                href={mylink?.reference || ""}
              >
                {mylink?.category}
              </Link>
            </div>
          ))}
        <motion.div
          initial={{ x: -width * 2.5, opacity: 0 }}
          animate={maskControls}
          className={`absolute w-[${width}px] h-7  border-0 bg-gray-400 border-gray-600 rounded-full opacity-10`}
        ></motion.div>
      </div>
    </div>
  );
};

const AdminDashButton = () => {
  return (
    <div className="relative scale-[0.7] md:scale-100 flex flex-col bg-transparent border-2 border-gray-300 hover:bg-gray-200 text-black  rounded-xl">
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
