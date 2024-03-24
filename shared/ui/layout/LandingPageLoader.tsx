import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LandingPageLoader = () => {
  return (
    <SkeletonTheme baseColor="rgb(243 ,244, 246)" highlightColor="white">
      <div className="flex">
        <Skeleton count={1} width="1000px" height="1000px" />
      </div>
    </SkeletonTheme>
  );
};

export default LandingPageLoader;
