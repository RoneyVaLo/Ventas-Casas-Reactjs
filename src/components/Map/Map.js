import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ handleCoordinates }) => {
    const mapStyles = {
        height: "60vh",
        width: "90%",
    };

    const defaultCenter = {
        lat: 10.319193, 
        lng: -84.429834,
    };

    const [markerPosition, setMarkerPosition] = useState(null);

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setMarkerPosition({ lat, lng });
        handleCoordinates(lat, lng);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDZDlJvA9XEG_6q06CU7hovJM_01aIOwrI">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                onClick={handleMapClick}
            >
                {markerPosition && <Marker position={markerPosition} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
