import { sanityFetch } from "./client";
import { SanityValues } from "./sanity.config";

export default async function getAllData() {
  const products: SanityValues["Product"][] = await sanityFetch({
    query: `*[_type == "Product"]`,
    tags: ["Product"],
  });

  console.log("products : ", products);
  return products;
}
