import styles from "./PlayAgain.module.css";
import { useDispatch } from "react-redux";
import { computerTankActions } from "../redux store/computerTank";
export default function PlayAgain(props) {
  const dispatch = useDispatch();
  function playAgainHandler() {
    props.playAgain();
    dispatch(computerTankActions.repair());
  }
  return (
    <div className={styles["play-again"]}>
      <button onClick={playAgainHandler} className="game__button">
        Play Again
      </button>
    </div>
  );
}
