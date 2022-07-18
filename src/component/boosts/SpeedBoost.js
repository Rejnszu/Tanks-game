import React from "react";
import styles from "./SpeedBoost.module.css";
import speedBoostLogo from "../../images/speedBoost.png";
import { useSelector } from "react-redux/es/exports";
import { Transition } from "react-transition-group";
export default function SpeedBoost(props) {
  const speedBoostActive = useSelector(
    (state) => state.boosts.speedBoostActive
  );
  return (
    <Transition in={speedBoostActive} timeout={2000} mountOnEnter unmountOnExit>
      {(state) => (
        <React.Fragment>
          <div
            style={{
              left: props.left + "px",
              top: props.top + "px",
              display: state === "exiting" ? "none" : "block",
            }}
            className={styles.boost}
          >
            <img src={speedBoostLogo} alt="Boost" />
          </div>
          <p
            className={styles.stonks}
            style={{
              left: props.left + "px",
              top: props.top + "px",
              display: state === "exiting" ? "block" : "none",
            }}
          >
            Speed Increased!
          </p>
        </React.Fragment>
      )}
    </Transition>
  );
}
