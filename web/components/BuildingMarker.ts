import L from "leaflet";

const BuildingMarker = L.icon({
  iconUrl: "/assets/building-solid.png",
  iconSize: [19, 25],
  iconAnchor: [24, 24],
  popupAnchor: [0, -24],
});

export default BuildingMarker;
