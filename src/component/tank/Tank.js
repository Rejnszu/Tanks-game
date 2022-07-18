import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { tankActions } from "../redux store/tank";
import styles from "./Tank.module.css";
import { computerTankActions } from "../redux store/computerTank";

export default function Tank(props) {
  const dispatch = useDispatch();

  const computerTank = useSelector((state) => state.computerTank);
  const {
    horizontal: computerHorizontal,
    vertical: computerVertical,
    destroyed: computerTankDestroyed,
  } = computerTank;
  const Bullet = useRef(null);
  const tankState = useSelector((state) => state.tank);
  const {
    horizontal,
    vertical,
    rotate,
    destroyed: playerDestroyed,
  } = tankState;

  const shoot = useCallback(() => {
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
      ((rotate === 0 || rotate === 180) &&
        Bullet.current.getBoundingClientRect().x + 50 >= computerHorizontal &&
        Bullet.current.getBoundingClientRect().x - 50 <= computerHorizontal &&
        Bullet.current.getBoundingClientRect().y + 150 >= computerVertical &&
        Bullet.current.getBoundingClientRect().y - 150 <= computerVertical) ||
      ((rotate === 90 || rotate === -90) &&
        Bullet.current.getBoundingClientRect().x + 150 >= computerHorizontal &&
        Bullet.current.getBoundingClientRect().x - 150 <= computerHorizontal &&
        Bullet.current.getBoundingClientRect().y + 50 >= computerVertical &&
        Bullet.current.getBoundingClientRect().y - 50 <= computerVertical)
    ) {
      dispatch(computerTankActions.destroy());
    }
  }, [computerHorizontal, computerVertical, dispatch]);

  const moveTank = useCallback(
    (e) => {
      console.log(Bullet.current.getBoundingClientRect());
      console.log(computerHorizontal, computerVertical);
      if (
        30 <= horizontal &&
        horizontal < window.innerWidth - 30 &&
        30 < vertical &&
        vertical < window.innerHeight - 30
      ) {
        switch (e.key) {
          case "ArrowUp":
            dispatch(tankActions.top());
            break;
          case "ArrowDown":
            dispatch(tankActions.down());
            break;
          case "ArrowLeft":
            dispatch(tankActions.left());
            break;
          case "ArrowRight":
            dispatch(tankActions.right());
            break;

          case " ":
            shoot();
            break;
          default:
            return;
        }
      } else {
        if (horizontal <= 30) {
          dispatch(tankActions.resetLeft());
        }
        if (horizontal >= window.innerWidth - 30) {
          dispatch(tankActions.resetRight());
        }
        if (vertical <= 30) {
          dispatch(tankActions.resetTop());
        }
        if (vertical >= window.innerHeight - 30) {
          dispatch(tankActions.resetDown());
        }
      }
    },
    [vertical, horizontal, shoot, dispatch]
  );

  useEffect(() => {
    if (!computerTankDestroyed && !playerDestroyed) {
      document.addEventListener("keydown", moveTank);
    }
    return () => document.removeEventListener("keydown", moveTank);
  }, [moveTank, computerTankDestroyed, playerDestroyed]);
  return (
    <Transition in={!playerDestroyed} timeout={2000} mountOnEnter unmountOnExit>
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
