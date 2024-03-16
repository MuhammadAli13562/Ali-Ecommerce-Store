import Selector from "@/shared/ui/Product/Selector";
import React, { ReactNode, Suspense } from "react";
import Loading from "./loading";

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
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <div className="w-36 absolute mt-[190px] top-0 right-48 ">
        <Selector gender={gender} />
      </div>
    </div>
  );
};

export default layout;
