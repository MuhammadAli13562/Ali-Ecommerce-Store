import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import { SanityValues } from "./sanity.config";

const builder = imageUrlBuilder(client);

export default function urlFor(imageSource: SanityValues["Product"]["image"]) {
  return builder.image(imageSource || "");
}
