import Link from "next/link";
import React from "react";

const CollageLink = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <div className=" hover:bg-gray-800 w-32 h-12 flex-center rounded-xl bg-gray-700 text-white">
        Shop Now
      </div>
    </Link>
  );
};

export default CollageLink;
