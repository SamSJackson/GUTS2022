import { readFileSync } from "fs";

export default function (building_slug: string) {
  let data = readFileSync(`../buildinggraphs/${building_slug}.html`, "utf-8");
  return data;
}
