import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const DetailsLoader = () => {
  return (
    <div className="w-full flex justify-center ">
      <SkeletonTheme baseColor="rgb(243 ,244, 246)" highlightColor="white">
        <div className="flex justify-center gap-6">
          <Skeleton count={1} width="500px" height="700px" />
          <div className="w-2/3 flex flex-col gap-4 items-center">
            <Skeleton count={1} width="500px" height="50px" />
            <Skeleton count={1} width="500px" height="550px" />
            <Skeleton count={1} width="400px" height="20px" />
            <Skeleton count={1} width="300px" height="20px" />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DetailsLoader;
