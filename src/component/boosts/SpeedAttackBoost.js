import React from "react";
import styles from "./SpeedBoostAttack.module.css";
import speedAttackBoostLogo from "../../images/attackSpeedBoost.png";
import { useSelector } from "react-redux/es/exports";
import { Transition } from "react-transition-group";
export default function SpeedAttackBoost(props) {
  const attackSpeedBoostActive = useSelector(
    (state) => state.boosts.attackSpeedBoostActive
  );
  return (
    <Transition
      in={attackSpeedBoostActive}
      timeout={2000}
      mountOnEnter
      unmountOnExit
    >
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
            <img src={speedAttackBoostLogo} alt="Boost" />
          </div>
          <p
            className={styles.stonks}
            style={{
              left: props.left + "px",
              top: props.top + "px",
              display: state === "exiting" ? "block" : "none",
            }}
          >
            Attack Speed Increased!
          </p>
        </React.Fragment>
      )}
    </Transition>
  );
}
