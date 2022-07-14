import React from "react";
import GroundMap from "./groundMap/GroundMap";
import LavaMap from "./lavaMap/LavaMap";
import { useSelector } from "react-redux";
export default function Maps() {
  const map = useSelector((state) => state.map.map);
  return (
    <React.Fragment>
      {map === "ground" && <GroundMap />}
      {map === "lava" && <LavaMap />}
    </React.Fragment>
  );
}
