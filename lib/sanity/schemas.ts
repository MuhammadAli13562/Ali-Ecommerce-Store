import { defineField, defineType } from "@sanity-typed/types";

export const productType = defineType({
  name: "Product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
