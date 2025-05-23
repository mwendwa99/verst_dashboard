import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import styles from "./ProjectLocationMap.module.css";

const nairobi = { lat: -1.286389, lng: 36.817223 };

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "var(--border-radius-xl)",
};

const mapOptions = {
  disableDefaultUI: true,
  draggable: false,
  zoomControl: false,
  scrollwheel: false,
  keyboardShortcuts: false,
  styles: [
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

const ProjectLocationMap: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_REACT_MAPS_API || "",
  });

  if (!isLoaded) return <div className={styles.mapContainer} />;

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={nairobi}
        zoom={11}
        options={mapOptions}
      >
        <Marker
          position={nairobi}
          icon={{
            url: "https://img.icons8.com/?size=100&id=84891&format=png&color=40C057",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default React.memo(ProjectLocationMap);
