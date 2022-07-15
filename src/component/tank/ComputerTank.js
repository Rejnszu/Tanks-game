import React, { useCallback, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import styles from "./ComputerTank.module.css";
import { useSelector, useDispatch } from "react-redux";
import { computerTankActions } from "../redux store/computerTank";
import { tankActions } from "../redux store/tank";
const actionTypes = [
  computerTankActions.left(),
  computerTankActions.right(),
  computerTankActions.top(),
  computerTankActions.down(),
];
export default function ComputerTank(props) {
  const dispatch = useDispatch();
  const Bullet = useRef(null);
  const computerTank = useSelector((state) => state.computerTank);
  const playerTank = useSelector((state) => state.tank);

  const {
    horizontal,
    vertical,
    rotate,
    destroyed: computerDestroyed,
  } = computerTank;
  const {
    horizontal: playerHorizontal,
    vertical: playerVertical,
    destroyed: playerDestroyed,
  } = playerTank;
  const moveComputerTank = useCallback(() => {
    if (
      100 <= horizontal &&
      horizontal < window.innerWidth - 100 &&
      100 < vertical &&
      vertical < window.innerHeight - 100
    ) {
      dispatch(
        actionTypes[Math.round(Math.random() * (actionTypes.length - 1))]
      );
    } else {
      if (horizontal <= 100) {
        dispatch(computerTankActions.resetLeft());
      }
      if (horizontal >= window.innerWidth - 100) {
        dispatch(computerTankActions.resetRight());
      }
      if (vertical <= 100) {
        dispatch(computerTankActions.resetTop());
      }
      if (vertical >= window.innerHeight - 100) {
        dispatch(computerTankActions.resetDown());
      }
    }
  }, [horizontal, vertical, dispatch]);

  const shoot = () => {
    console.log("shot");
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

    if (
      Bullet.current.getBoundingClientRect().x + 100 >= playerHorizontal &&
      Bullet.current.getBoundingClientRect().x - 100 <= playerHorizontal &&
      Bullet.current.getBoundingClientRect().y + 100 >= playerVertical &&
      Bullet.current.getBoundingClientRect().y - 100 <= playerVertical
    ) {
      dispatch(tankActions.destroy());
    }
  };

  useEffect(() => {
    let moveTimer;
    let shootTimer;
    if (!computerDestroyed && !playerDestroyed) {
      moveTimer = setInterval(moveComputerTank, 1500);
      shootTimer = setInterval(shoot, 1000);
    }
    return () => {
      clearInterval(moveTimer);
      clearInterval(shootTimer);
    };
  }, [computerDestroyed, playerDestroyed, moveComputerTank]);
  return (
    <Transition
      in={!computerDestroyed}
      timeout={2000}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <React.Fragment>
          <div
            style={{
              left: horizontal + "px",
              top: vertical + "px",
              transform: `rotate(${rotate}deg)`,
              display: state === "exiting" ? "none" : "block",
            }}
            className={styles.tank}
          >
            <span className={styles["tank__gun"]}>
              <span ref={Bullet} className={styles["tank__bullet"]} />
            </span>
            <span className={styles["tank__track--left"]}></span>
            <span className={styles["tank__track--right"]}></span>
          </div>
          <div
            className={styles.fire}
            style={{
              left: horizontal + "px",
              top: vertical + "px",
              display: state === "exiting" ? "block" : "none",
            }}
          ></div>
        </React.Fragment>
      )}
    </Transition>
  );
}
