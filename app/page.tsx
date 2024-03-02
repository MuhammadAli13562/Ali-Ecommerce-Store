import getAllData from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/ProductGrid";
import Slider from "@/shared/ui/Slider";

export default async function Home() {
  return (
    <div className="w-full">
      <Slider />
      <MostPopular />
    </div>
  );
}

const MostPopular = async () => {
  const Products = await getAllData();

  return (
    <div className="col-center gap-12 ">
      <p className="text-3xl font-bold">Most Popular Today</p>
      <ProductGrid Products={Products} />
    </div>
  );
};
