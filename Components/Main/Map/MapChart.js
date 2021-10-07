import React, { memo } from "react";
import customMap from "/public/Maps/world.json";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = customMap;
const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const markers = {
  small: [
    { markerOffset: 15, coordinates: [245, 55.4897] },
    { markerOffset: 15, coordinates: [270, 35.7942] },
    { markerOffset: 15, coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, coordinates: [110.6693, 23.4489] },
    { markerOffset: 15, coordinates: [2.6693, 41.4489] },
  ],
  medium: [
    { markerOffset: 15, coordinates: [45, 55.4897] },
    { markerOffset: 15, coordinates: [9, 12] },
    { markerOffset: 15, coordinates: [140, -32] },
    { markerOffset: 15, coordinates: [78, 18] },
  ],
};
const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }} height={400}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#DDE0E4",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.small.map(({ coordinates, markerOffset }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="2" fill="#F53838" />
              <circle cx="12" cy="10" r="7" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            ></text>
          </Marker>
        ))}

        {markers.medium.map(({ coordinates, markerOffset }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" fill="#F53838" />
              <circle cx="12" cy="10" r="10" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            ></text>
          </Marker>
        ))}
      </ComposableMap>
    </>
  );
};

export default MapChart;
