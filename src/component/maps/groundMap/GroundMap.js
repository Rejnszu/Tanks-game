import React from "react";
import styles from "./GroundMap.module.css";
import SingleTree from "./environment/SingleTree";
import Rock from "./environment/Rock";
import GroupTree from "./environment/GroupTree";
const horizontalTreeArray = new Array(31).fill(1);
const verticalTreeArray = new Array(90).fill(1);
const randomArray = new Array(30).fill(1);

const GroundMap = (props) => {
  return (
    <div className={styles.map}>
      <div className={styles.leftTrees}>
        {[...horizontalTreeArray].map((tree, i) => {
          return <GroupTree key={i} />;
        })}
      </div>
      <div className={styles.rightTrees}>
        {[...horizontalTreeArray].map((tree, i) => {
          return <GroupTree key={i} />;
        })}
      </div>
      <div className={styles.topTrees}>
        {[...verticalTreeArray].map((tree, i) => {
          return <GroupTree key={i} />;
        })}
      </div>
      <div className={styles.bottomTrees}>
        {[...verticalTreeArray].map((tree, i) => {
          return <GroupTree key={i} />;
        })}
      </div>
      <div>
        {[...randomArray].map((tree, i) => {
          return (
            <SingleTree
              key={i}
              top={Math.round(Math.random() * (95 - 5)) + 5}
              left={Math.round(Math.random() * (95 - 5)) + 5}
            />
          );
        })}
      </div>
      <div>
        {[...randomArray].map((rock, i) => {
          return (
            <Rock
              key={i}
              top={Math.round(Math.random() * (95 - 5)) + 5}
              left={Math.round(Math.random() * (95 - 5)) + 5}
            />
          );
        })}
      </div>

      {props.children}
    </div>
  );
};
export default React.memo(GroundMap);
