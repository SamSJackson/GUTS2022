import load_buildings from "./load_buildings";
import slugify_building from "./slugify_building";

export default function (target: string): Building {
  target = target.toLowerCase();
  let all_buildings = load_buildings();

  for (let b of all_buildings) {
    let slug = slugify_building(b);
    if (target === slug) return b;
  }
  return all_buildings[0];
}
