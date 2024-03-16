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
    defineField({
      name: "Gender",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
  ],
});

export const MenCategories = ["Shirts", "Belts", "Pants", "Jackets"];
export const WomenCategories = [
  "Dresses",
  "Shirts",
  "Sweaters",
  "Pants",
  "Hats",
  "Coats",
];

export const MenCategoriesOptions = MenCategories.sort().map((cat) => ({
  value: cat.toLowerCase(),
  label: cat,
}));

export const WomenCategoriesOptions = WomenCategories.sort().map((cat) => ({
  value: cat.toLowerCase(),
  label: cat,
}));
