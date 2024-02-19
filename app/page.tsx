import getAllData from "@/lib/sanity/client";
import ProductGrid from "@/shared/ui/ProductGrid";

export const revalidate = 60;

export default async function Home() {
  const Products = await getAllData();

  return (
    <div className="">
      <ProductGrid Products={Products} />
    </div>
  );
}
