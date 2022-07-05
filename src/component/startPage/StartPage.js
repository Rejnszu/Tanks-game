import React from "react";
import styles from "./StartPage.module.css";
export default function StartPage(props) {
  return <div className={styles["start-page"]}>{props.children}</div>;
}
