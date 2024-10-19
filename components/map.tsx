//hooks
import { useEffect, useState } from "react";

//assets
import markerIcon from "../public/assets/images/location/map-icon.svg";

//third party
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconRetinaUrl: markerIcon.src,
  iconUrl: markerIcon.src,
  shadowUrl: "",
  iconSize: [51, 63],
  iconAnchor: [25.5, 63],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({
  positionAccommodation,
  setPositionAccommodation,
  editable,
}: {
  positionAccommodation: [number, number];
  setPositionAccommodation: (pos: [number, number]) => void;
  editable: boolean;
}) => {
  
  //state
  const [position, setPosition] = useState<[number, number]>(
    positionAccommodation
  );

  //function
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        if (editable) {
          setPosition([e.latlng.lat, e.latlng.lng]);
          setPositionAccommodation([e.latlng.lat, e.latlng.lng]);
        }
      },
    });

    return (
      <Marker position={position} icon={customIcon} alt="" title="hhhhhhhh">
        <div className="custom-marker" />
      </Marker>
    );
  };

  const RecenterMap = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
    }, [center]);
    return null;
  };

  //useEffect
  useEffect(() => {
    setPosition(positionAccommodation);
  }, [positionAccommodation]);

  return (
    <div
      className={`w-full h-full shadow-200 ${
        editable ? "editable-map" : "cursor-pointer not-editable-map"
      }`}
    >
      <MapContainer
        center={position}
        zoom={4}
        style={{ height: "100%", width: "100%", borderRadius: "1.5rem" }}
        dragging={editable}
        scrollWheelZoom={editable}
        doubleClickZoom={editable}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
        />
        <LocationMarker />
        <RecenterMap center={position} />
      </MapContainer>
    </div>
  );
};

export default Map;
