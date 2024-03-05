import Selector from "@/shared/ui/Product/Selector";
import React, { ReactNode } from "react";

const layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { gender: string };
}) => {
  const gender = params.gender;

  return (
    <div>
      <div className="w-36 absolute right-1/4">
        <Selector gender={gender} />
      </div>
      {children}
    </div>
  );
};

export default layout;
