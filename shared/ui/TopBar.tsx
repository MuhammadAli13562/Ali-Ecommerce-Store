import Image from "next/image";
import Link from "next/link";
import logo from "@/public/delivery-logo.svg";
import { Input } from "@/components/ui/input";
import { TopLinks } from "../constants";
import Cart from "./Cart";

export default function TopBar() {
  return (
    <div className="flex-center mt-4 mb-4 p-4">
      <NavigationLinks />
      <SearchBar />
      <Cart />
    </div>
  );
}

const NavigationLinks = () => {
  return (
    <div className="flex-center gap-12">
      <Link className="flex-center   " href="/">
        <Image src={logo} alt="logo" width={75} />
        <p className="font-bold text-yellow-900 -ml-2">toShip</p>
      </Link>
      <div className="flex gap-4  inactive-font-color ">
        {TopLinks &&
          TopLinks.map((mylink) => (
            <Link
              className="hover:underline hover:text-gray-900 "
              href={mylink.reference}
            >
              {mylink.category}
            </Link>
          ))}
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex-1 flex-center ">
      <Input
        className=" bg-yellow-800 text-white border-none w-3/6"
        placeholder="Search"
      />
    </div>
  );
};
