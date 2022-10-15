import { readFileSync } from "fs";

export default function () {
  let data = readFileSync("../data/location_json.json", "utf-8");

  let parsed_data: Building[] = JSON.parse(data);
  return parsed_data;
}
