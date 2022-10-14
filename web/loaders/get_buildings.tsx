import { readFileSync } from "fs";

let get_buildings = () => {
  let data = readFileSync("../data/location_data.csv", "utf-8");
  let building_strings = data.split("\n");

  let buildings: Building[] = building_strings.map((each) => {
    let d = each.split(",");

    // @ts-ignore
    let geoloc: [number, number] = d[1]
      .slice(1, -1)
      .split(" ")
      .map((each) => Number(each));
    let building = {
      name: d[0],
      geolocation: geoloc,
      opening_times: d[2],
      description: d[3],
    };

    return building;
  });

  buildings.shift();
  return buildings;
};

export default get_buildings;
