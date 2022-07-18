import styles from "./PlayAgain.module.css";
import { useDispatch } from "react-redux";
import { computerTankActions } from "../redux store/computerTank";
import { mapActions } from "../redux store/mapSelect";
import { tankActions } from "../redux store/tank";
import { boostsActions } from "../redux store/boosts";
export default function PlayAgain(props) {
  const dispatch = useDispatch();
  function playAgainHandler() {
    props.playAgain();
    dispatch(computerTankActions.reset());
    dispatch(tankActions.reset());
    dispatch(mapActions.resetMap());
    dispatch(boostsActions.resetBoosts());
  }
  return (
    <div className={styles["play-again"]}>
      <button onClick={playAgainHandler} className="game__button">
        Play Again
      </button>
    </div>
  );
}
