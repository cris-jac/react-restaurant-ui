import { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Box, Typography } from "@mui/material";

const ContactMap = () => {
  const mapRef = useRef(null);

  const centerCoordinates = fromLonLat([-58.3646, -34.612]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: centerCoordinates,
        zoom: 18,
      }),
    });

    return () => {
      map.setTarget();
    };
  }, []);

  return (
    <Box width="100%" sx={{ position: "relative" }}>
      <Typography variant="subtitle2" marginTop={4} marginBottom={2}>
        Find us
      </Typography>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
    </Box>
  );
};

export default ContactMap;
