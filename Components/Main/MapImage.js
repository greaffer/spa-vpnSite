import { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./Map/MapChart";
import MapTitle from "./Map/MapTitle";
const MapImage = () => {
  const [content, setContent] = useState("");

  return (
    <div className="hidden md:block">
      <MapTitle />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default MapImage;
