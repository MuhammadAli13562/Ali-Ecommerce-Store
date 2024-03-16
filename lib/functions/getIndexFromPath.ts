export const getIndexFromPath = (path: string) => {
  const pathArray = path.split("/");
  const indexfromCat = ["all", "men", "women", "kids"];
  const category =
    pathArray.length === 2
      ? pathArray[1] === "categories"
        ? "all"
        : ""
      : pathArray[2];

  return indexfromCat.indexOf(category);
};
