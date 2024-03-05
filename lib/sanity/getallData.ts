import { sanityFetch } from "./client";
import { SanityValues } from "./sanity.config";

export async function getAllData() {
  const products: SanityValues["Product"][] = await sanityFetch({
    query: `*[_type == "Product"]`,
    tags: ["Product"],
  });

  console.log("products : ", products);
  return products;
}

export async function getLatestData() {
  const products: SanityValues["Product"][] = await sanityFetch({
    query: `*[_type == "Product"] | order(_createdAt desc)[0...4]`,
    tags: ["Product"],
  });

  console.log("products : ", products);
  return products;
}

export async function getDataByGender(gender: "men" | "women") {
  const products: SanityValues["Product"][] = await sanityFetch({
    query: `*[_type == "Product" && Gender=="${gender}" ]`,
    tags: ["Product"],
  });

  console.log("products : ", products);
  return products;
}
