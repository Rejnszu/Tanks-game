import React from "react";
import styles from "./LavaMap.module.css";

const LavaMap = (props) => {
  return <div className={styles.map}>{props.children}</div>;
};
export default React.memo(LavaMap);
