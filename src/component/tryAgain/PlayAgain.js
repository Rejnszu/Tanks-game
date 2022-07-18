import styles from "./PlayAgain.module.css";
import { useDispatch } from "react-redux";
import { computerTankActions } from "../redux store/computerTank";
import { mapActions } from "../redux store/mapSelect";
import { tankActions } from "../redux store/tank";
export default function PlayAgain(props) {
  const dispatch = useDispatch();
  function playAgainHandler() {
    props.playAgain();
    dispatch(computerTankActions.reset());
    dispatch(tankActions.reset());
    dispatch(mapActions.resetMap());
  }
  return (
    <div className={styles["play-again"]}>
      <button onClick={playAgainHandler} className="game__button">
        Play Again
      </button>
    </div>
  );
}
