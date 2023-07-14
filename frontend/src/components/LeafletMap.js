import React from "react";
import RecenterAutomatically from "./MapView";
import location from "../images/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const LeafletMap = ({ info }) => {
  const customIcon = new Icon({
    iconUrl: location,
  });

  const position = [info.lat, info.lon];

  return (
    <div className="map" id="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}></Marker>
        <RecenterAutomatically lat={info.lat} lon={info.lon} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
