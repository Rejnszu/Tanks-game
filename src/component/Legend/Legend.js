import React from "react";
import { useState } from "react";
import styles from "./Legend.module.css";
import shoot from "./../../images/shoot.png";
export default function Legend() {
  const [showLegend, setShowLegend] = useState(true);
  function toggleLegend() {
    setShowLegend((legend) => !legend);
  }
  return (
    <div className={`${styles.background} ${showLegend ? styles.active : ""}`}>
      <div className={`${styles.legend} ${showLegend ? styles.active : ""}`}>
        {showLegend && (
          <p onClick={toggleLegend} className={styles["toggle-legend"]}>
            Hide
          </p>
        )}
        {!showLegend && (
          <p onClick={toggleLegend} className={styles["toggle-legend"]}>
            Show
          </p>
        )}
        <h4>Legend</h4>
        <ul>
          <li>
            <img src={shoot} alt="shoot" />: Spacebar
          </li>
          <li>
            <i className="bi bi-arrow-up-short"></i>: Arrow Up
          </li>
          <li>
            <i className="bi bi-arrow-down-short"></i>: Arrow down
          </li>
          <li>
            <i className="bi bi-arrow-left-short"></i>: Arrow Left
          </li>
          <li>
            <i className="bi bi-arrow-right-short"></i>: Arrow Right
          </li>
        </ul>
      </div>
    </div>
  );
}
