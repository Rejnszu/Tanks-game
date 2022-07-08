import React, { useContext } from "react";
import styles from "./PlayAgain.module.css";
import ComputerTankContext from "../../store/computerTank-context";
export default function PlayAgain(props) {
  const compTankCtx = useContext(ComputerTankContext);
  function playAgainHandler() {
    props.playAgain();
    compTankCtx.repairComputerTank();
  }
  return (
    <div className={styles["play-again"]}>
      <button onClick={playAgainHandler} className="game__button">
        Play Again
      </button>
    </div>
  );
}
