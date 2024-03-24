import ProductDetails from "@/components/shared/Product/ProductDetails";
import NoItemFound from "@/components/shared/layout/NoItemFound";
import { SlugtoName } from "@/lib/functions/SlugNameconversion";
import { getAllData } from "@/lib/sanity/getallData";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const product_title = SlugtoName(slug);

  const Porducts = await getAllData();

  const filteredProduct = Porducts.find(
    (prod) =>
      prod.title
        ?.toLowerCase()
        .replace(/[^a-z]/g, "")
        .replace(/-/g, "")
        .replace(/ /g, "") === product_title
  );

  console.log("filtered product : ", filteredProduct);

  if (!filteredProduct)
    return (
      <div className="place-center">
        <NoItemFound />
      </div>
    );

  return (
    <div>
      <ProductDetails Product={filteredProduct} />
    </div>
  );
};

export default page;
