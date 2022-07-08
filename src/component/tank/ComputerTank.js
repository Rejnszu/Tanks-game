import React, { useContext, useEffect } from "react";
import { Transition } from "react-transition-group";
import styles from "./ComputerTank.module.css";
import ComputerTankContext from "../../store/computerTank-context";

export default function ComputerTank(props) {
  const compTankCtx = useContext(ComputerTankContext);

  const position = compTankCtx.position;

  const { horizontal, vertical, rotate } = position;

  useEffect(() => {
    let timer;
    if (!compTankCtx.destroyed) {
      timer = setInterval(compTankCtx.moveComputerTank, 1500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [compTankCtx.destroyed, compTankCtx.moveComputerTank]);
  return (
    <Transition
      in={!compTankCtx.destroyed}
      timeout={3000}
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
