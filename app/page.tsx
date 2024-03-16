import { getLatestData } from "@/lib/sanity/getallData";
import { JeansCollage, TeeShirtCollage } from "@/shared/constants/constants";
import ProductGrid from "@/shared/ui/Product/ProductGrid";
import Slider from "@/shared/ui/Slider";
import Collage from "@/shared/ui/decorative/Collage";
import InvertedCollage from "@/shared/ui/decorative/InvertedCollage";

export default async function Home() {
  return (
    <div className="w-full">
      <Slider />
      <LatestProducts />
    </div>
  );
}

const LatestProducts = async () => {
  const Products = await getLatestData();

  return (
    <div className="col-center gap-12 ">
      <p className="text-3xl font-bold">Latest Clothing Line </p>
      <ProductGrid Products={Products} />
      <InvertedCollage product={JeansCollage} />
    </div>
  );
};
