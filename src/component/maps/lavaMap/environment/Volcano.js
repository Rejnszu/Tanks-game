import React from "react";
import VolcanoLogo from "../../../../images/volcano.png";
import styles from "./Volcano.module.css";
export default function Volcano(props) {
  return (
    <div
      className={styles.volcano}
      style={{
        left: props.left + "%",
        top: props.top + "%",
      }}
    >
      <img src={VolcanoLogo} alt="Volcano" />
    </div>
  );
}
