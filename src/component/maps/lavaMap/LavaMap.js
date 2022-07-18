import React from "react";
import styles from "./LavaMap.module.css";
import Volcano from "./environment/Volcano";
import GroupRock from "./environment/GroupRock";
const randomArray = new Array(30).fill(1);
const horizontalRockArray = new Array(31).fill(1);
const verticalRockArray = new Array(90).fill(1);
const LavaMap = (props) => {
  return (
    <div className={styles.map}>
      {" "}
      <div className={styles.leftRocks}>
        {[...horizontalRockArray].map((tree, i) => {
          return <GroupRock key={i} />;
        })}
      </div>
      <div className={styles.rightRocks}>
        {[...horizontalRockArray].map((tree, i) => {
          return <GroupRock key={i} />;
        })}
      </div>
      <div className={styles.topRocks}>
        {[...verticalRockArray].map((tree, i) => {
          return <GroupRock key={i} />;
        })}
      </div>
      <div className={styles.bottomRocks}>
        {[...verticalRockArray].map((tree, i) => {
          return <GroupRock key={i} />;
        })}
      </div>
      <div>
        {[...randomArray].map((volcano, i) => {
          return (
            <Volcano
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
export default React.memo(LavaMap);
