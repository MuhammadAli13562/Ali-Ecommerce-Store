export const nameToSlug = (name: string) => {
  // Convert to lowercase and replace spaces with hyphens
  let slug = name.toLowerCase().replace(/\s+/g, "-");
  // Remove any characters that are not alphanumeric or hyphens
  slug = slug.replace(/[^a-z0-9-]/g, "");
  return slug;
};

export const SlugtoName = (slug: string) => {
  // Replace hyphens with spaces
  let name = slug.split("-").join("");
  return name;
};
