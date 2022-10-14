import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FC, ReactNode } from "react";

interface mapProps {
  children?: ReactNode;
}

const Map: FC<mapProps> = ({ children }) => {
  return (
    <MapContainer
      center={[55.872925, -4.288128]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "90vh", width: "100%", zIndex: 1 }}
      zoomControl={false}
      // dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default Map;
