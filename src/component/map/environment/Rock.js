import React from "react";
import RockLogo from "./../../../images/rock.png";
import styles from "./Rock.module.css";
export default function Rock(props) {
  return (
    <div
      className={styles.rock}
      style={{
        left: props.left + "%",
        top: props.top + "%",
      }}
    >
      <img src={RockLogo} alt="Rock" />
    </div>
  );
}
