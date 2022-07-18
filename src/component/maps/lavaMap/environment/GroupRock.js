import React from "react";
import Rocks from "../../../../images/volcanoRock.png";
import styles from "./GroupRock.module.css";
export default function GroupRock(props) {
  return (
    <div
      className={styles.rock}
      style={{
        left: props.left + "%",
        top: props.top + "%",
      }}
    >
      <img src={Rocks} alt="Tree" />
    </div>
  );
}
