import { createClient } from "next-sanity";
import { SanityValues } from "./sanity.config";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v2022-03-07",
  useCdn: false,
  perspective: "published",
});

export default async function getAllData() {
  const products: SanityValues["Product"][] = await client.fetch(
    `*[_type == "Product"]`
  );

  console.log("products : ", products);
  return products;
}
