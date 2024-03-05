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
      <div className="w-36 absolute right-1/4">
        <Selector gender={gender} />
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default layout;
