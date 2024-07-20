"use client";
// pages/map.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CompanyLocation: React.FC = () => {
  React.useEffect(() => {}, []);

  if (typeof window !== "undefined") {
    return (
      <div className="w-1/2 z-0">
        <h1>My OpenStreetMap</h1>
        <MapContainer
          center={[40.7128, -74.006]}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[40.7128, -74.006]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CompanyLocation;
