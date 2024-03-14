import React from "react";
import Cover from "@/public/Collage/cover.jpg";
import Image from "next/image";

const Collage = () => {
  return (
    <div>
      <Image src={Cover} width={0} height={0} sizes="100vw" alt="logo" />
    </div>
  );
};

export default Collage;
