import React from "react";
import treeLogo from "../../../../images/tree1.png";
import styles from "./GroupTree.module.css";
export default function GroupTree(props) {
  return (
    <div
      className={styles.tree}
      style={{
        left: props.left + "%",
        top: props.top + "%",
      }}
    >
      <img src={treeLogo} alt="Tree" />
    </div>
  );
}
