export function slugify(input: Building) {
  return input.name.toLowerCase().replaceAll(" ", "_");
}
