import React from "react";

const SizeBoundary = () => {
  return (
    <div className="flex">
      <span className="md:hidden">sm</span>
      <span className="hidden md:flex lg:hidden">md</span>
      <span className="hidden lg:flex xl:hidden">lg</span>
      <span className="hidden xl:flex 2xl:hidden">xl</span>
      <span className="hidden 2xl:flex">2xl</span>
    </div>
  );
};

export { SizeBoundary };
