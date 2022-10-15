import { readFileSync } from "fs";

export default function (): Person[] {
  let data = readFileSync("../data/people_json.json", "utf-8");

  let parsed_data: Person[] = JSON.parse(data);
  return parsed_data;
}
