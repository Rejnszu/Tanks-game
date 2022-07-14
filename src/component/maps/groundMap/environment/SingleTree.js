import React from "react";
import treeLogo from "../../../../images/tree1.png";
import styles from "./SingleTree.module.css";
export default function SingleTree(props) {
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
