import { useState } from "react";
import React from "react";
const MapSelectContext = React.createContext({
  map: null,
  setMap: () => {},
});

export const MapSelectContextProvider = (props) => {
  const [selectedMap, setSelectedMap] = useState(null);

  function setMap(e) {
    setSelectedMap(e.target.getAttribute("data-map"));
  }

  const contextValue = {
    map: selectedMap,
    setMap: setMap,
  };
  return (
    <MapSelectContext.Provider value={contextValue}>
      {props.children}
    </MapSelectContext.Provider>
  );
};
export default MapSelectContext;
