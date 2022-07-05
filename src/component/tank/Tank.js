import React from "react";
import { useReducer, useCallback, useEffect, useRef } from "react";
import styles from "./Tank.module.css";

const initialState = {
  horizontalMove: 50,
  verticalMove: 80,
  rotate: 0,
};
function tankReducer(state, action) {
  if (action.type === "left") {
    return {
      horizontalMove: state.horizontalMove - 1,
      verticalMove: state.verticalMove,
      rotate: -90,
    };
  }
  if (action.type === "right") {
    return {
      horizontalMove: state.horizontalMove + 1,
      verticalMove: state.verticalMove,
      rotate: 90,
    };
  }
  if (action.type === "top") {
    return {
      horizontalMove: state.horizontalMove,
      verticalMove: state.verticalMove - 2,
      rotate: 0,
    };
  }
  if (action.type === "down") {
    return {
      horizontalMove: state.horizontalMove,
      verticalMove: state.verticalMove + 2,
      rotate: 180,
    };
  }
  if (action.type === "resetLeft") {
    return {
      horizontalMove: state.horizontalMove + 2,
      verticalMove: state.verticalMove,
      rotate: 90,
    };
  }
  if (action.type === "resetRight") {
    return {
      horizontalMove: state.horizontalMove - 2,
      verticalMove: state.verticalMove,
      rotate: -90,
    };
  }
  if (action.type === "resetTop") {
    return {
      horizontalMove: state.horizontalMove,
      verticalMove: state.verticalMove + 2,
      rotate: 180,
    };
  }
  if (action.type === "resetDown") {
    return {
      horizontalMove: state.horizontalMove,
      verticalMove: state.verticalMove - 2,
      rotate: 0,
    };
  }
  return { horizontalMove: 50, verticalMove: 80, rotate: 0 };
}

export default function Tank(props) {
  const Bullet = useRef(null);
  const [tankState, dispatchTank] = useReducer(tankReducer, initialState);
  const { verticalMove, horizontalMove, rotate } = tankState;

  const moveTank = useCallback(
    (e) => {
      if (
        -1 <= horizontalMove &&
        horizontalMove < 100 &&
        -1 < verticalMove &&
        verticalMove < 100
      ) {
        switch (e.key) {
          case "ArrowUp":
            dispatchTank({ type: "top" });
            break;
          case "ArrowDown":
            dispatchTank({ type: "down" });
            break;
          case "ArrowLeft":
            dispatchTank({ type: "left" });
            break;
          case "ArrowRight":
            dispatchTank({ type: "right" });
            break;

          case " ":
            shoot();
            break;
          default:
            return;
        }
      } else {
        if (horizontalMove <= -1) {
          dispatchTank({ type: "resetLeft" });
        }
        if (horizontalMove >= 100) {
          dispatchTank({ type: "resetRight" });
        }
        if (verticalMove <= -1) {
          dispatchTank({ type: "resetTop" });
        }
        if (verticalMove >= 100) {
          dispatchTank({ type: "resetDown" });
        }
      }
    },
    [verticalMove, horizontalMove]
  );
  function shoot() {
    let bulletSpeed = 600;
    if (Bullet.current.classList.contains(styles.animate)) {
      return;
    } else {
      Bullet.current.classList.add(styles.animate);
      Bullet.current.style.animationDuration = bulletSpeed + "ms";
      setTimeout(() => {
        Bullet.current.classList.remove(styles.animate);
      }, bulletSpeed);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", moveTank);
    return () => document.removeEventListener("keydown", moveTank);
  }, [moveTank]);
  return (
    <div
      style={{
        left: horizontalMove + "%",
        top: verticalMove + "%",
        transform: `rotate(${rotate}deg)`,
      }}
      className={styles.tank}
    >
      <span className={styles["tank__gun"]}>
        <span ref={Bullet} className={styles["tank__bullet"]} />
      </span>
      <span className={styles["tank__track--left"]}></span>
      <span className={styles["tank__track--right"]}></span>
    </div>
  );
}
