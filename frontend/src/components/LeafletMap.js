import React from "react";
import location from "../images/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const LeafletMap = ({ info }) => {
  const customIcon = new Icon({
    iconUrl: location,
  });

  const position = [34.04915, -118.09462];

  return (
    <div className="map" id="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
