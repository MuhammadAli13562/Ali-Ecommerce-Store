import React, { ReactNode, Suspense } from "react";
import Loading from "./loading";

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default layout;
