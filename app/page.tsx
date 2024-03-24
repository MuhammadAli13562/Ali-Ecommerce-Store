import { JeansCollage } from "@/shared/constants/constants";
import ProductGrid from "@/components/shared/ui/Product/ProductGrid";
import Slider from "@/components/shared/ui/Slider";
import { getLatestData } from "@/lib/sanity/getallData";
import InvertedCollage from "@/components/shared/ui/decorative/InvertedCollage";

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
