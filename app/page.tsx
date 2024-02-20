import getAllData from "@/lib/sanity/getallData";
import ProductGrid from "@/shared/ui/ProductGrid";

export default async function Home() {
  const Products = await getAllData();

  return (
    <div className="">
      <ProductGrid Products={Products} />
    </div>
  );
}
