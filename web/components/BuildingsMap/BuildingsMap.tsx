import Link from "next/link";
import { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { slugify } from "../../loaders/slugify";
import BuildingMarker from "../BuildingMarker";
import BuildingMarkerWhite from "../BuildingMarkerWhite";
import Map from "../Map";

interface bMapProps {
  buildings: Building[];
  selected: string;
}

const BuildingsMap: FC<bMapProps> = ({ buildings, selected }) => {
  return (
    <div>
      <Map>
        {buildings.map((each) => {
          let slug = slugify(each);

          let icon = selected === slug ? BuildingMarkerWhite : BuildingMarker;
          return (
            <Marker icon={icon} position={each.geolocation}>
              <Popup>
                <Link href={`/building/${slug}`}>{each.name}</Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default BuildingsMap;
