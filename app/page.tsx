import { getAllData, getLatestData } from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/Product/ProductGrid";
import Slider from "@/shared/ui/Slider";

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
    </div>
  );
};
