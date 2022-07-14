import React, { useCallback, useEffect } from "react";
import { Transition } from "react-transition-group";
import styles from "./ComputerTank.module.css";
import { useSelector, useDispatch } from "react-redux";
import { computerTankActions } from "../redux store/computerTank";
const actionTypes = [
  computerTankActions.left(),
  computerTankActions.right(),
  computerTankActions.top(),
  computerTankActions.down(),
];
export default function ComputerTank(props) {
  const dispatch = useDispatch();

  const computerTank = useSelector((state) => state.computerTank);

  const { horizontal, vertical, rotate, destroyed } = computerTank;

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

  useEffect(() => {
    let timer;
    if (!destroyed) {
      timer = setInterval(moveComputerTank, 1500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [destroyed, moveComputerTank]);
  return (
    <Transition in={!destroyed} timeout={3000} mountOnEnter unmountOnExit>
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
              {/* <span ref={Bullet} className={styles["tank__bullet"]} /> */}
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
