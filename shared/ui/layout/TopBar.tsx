import Image from "next/image";
import Link from "next/link";
import logo from "@/public/delivery-logo.svg";
import { TopLinks } from "../../constants";
import Cart from "../Cart/Cart";

export default function TopBar() {
  return (
    <div className="flex-center z-50 bg-white top-0 h-32 fixed w-full p-4 border-b-2 border-solid border-gray-200 shadow-xl">
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
      <Image src={logo} alt="logo" width={75} />
      <p className="font-bold hidden md:flex text-yellow-900 -ml-2">toShip</p>
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
