import React, { useRef } from "react";
import styles from "./MapSelect.module.css";
import { mapActions } from "../../redux store/mapSelect";
import { useDispatch } from "react-redux";
export default function MapSelect() {
  const dispatch = useDispatch();
  function selectMapHandler(e) {
    dispatch(mapActions.setMap(e.target.getAttribute("data-map")));
  }
  const mapRef = useRef();
  function highlightMap(e) {
    Array.from(mapRef.current.children).forEach((map) => {
      map.style.border = "none";
    });
    e.target.style.border = "3px solid red";
  }

  return (
    <div className={styles["map-container"]}>
      <p className={styles["map-container__header"]}>Select a map.</p>
      <div
        onClick={highlightMap}
        ref={mapRef}
        className={styles["map__inside-container"]}
      >
        <div
          onClick={selectMapHandler}
          data-map="ground"
          className={styles["ground-map"]}
        ></div>
        <div
          onClick={selectMapHandler}
          data-map="lava"
          className={styles["lava-map"]}
        ></div>
      </div>
    </div>
  );
}
