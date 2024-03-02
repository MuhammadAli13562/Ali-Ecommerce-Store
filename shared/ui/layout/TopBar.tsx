import Image from "next/image";
import Link from "next/link";
import logo from "@/public/delivery-logo.svg";
import { Input } from "@/components/ui/input";
import { TopLinks } from "../../constants";
import Cart from "../Cart/Cart";

export default function TopBar() {
  return (
    <div className="flex-center z-50 bg-white top-0 h-32 fixed w-full p-4 border-b-2 border-solid border-gray-200 shadow-xl">
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
    <div className="flex-1 flex-center  ">
      <Input className=" bg-gray-400  border-none w-3/6" placeholder="" />
      <button className="-ml-12 z-10 bg-gray-600 p-2 pr-4  rounded-r-3xl text-white">
        Search
      </button>
    </div>
  );
};
