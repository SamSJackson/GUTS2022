import get_buildings from "./get_buildings";
import { slugify } from "./slugify";

let get_building = (target: string): Building => {
  target = target.toLowerCase();
  let all_buildings = get_buildings();

  for (let b of all_buildings) {
    let slug = slugify(b);
    if (target === slug) return b;
  }
  return all_buildings[0];
};

export default get_building;
