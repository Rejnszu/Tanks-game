import React from "react";
import { useState } from "react";
import Maps from "./component/maps/Maps";
import Tank from "./component/tank/Tank";
import Legend from "./component/Legend/Legend";
import StartPage from "./component/startPage/StartPage";
import ComputerTank from "./component/tank/ComputerTank";
import MapSelect from "./component/startPage/mapSelect/MapSelect";
import PlayAgain from "./component/tryAgain/PlayAgain";

import { useSelector } from "react-redux";
import SpeedBoost from "./component/boosts/SpeedBoost";
import SpeedAttackBoost from "./component/boosts/SpeedAttackBoost";

function App() {
  const [boostPosition, setBoostPosition] = useState({
    speedBoostHorizontal:
      Math.round(Math.random() * (window.innerWidth - 60)) + 60,
    speedBoostVertical:
      Math.round(Math.random() * (window.innerHeight - 60)) + 60,
    attackSpeedBoostHorizontal:
      Math.round(Math.random() * (window.innerWidth - 60)) + 60,
    attackSpeedBoostVertical:
      Math.round(Math.random() * (window.innerHeight - 60)) + 60,
  });

  const {
    speedBoostHorizontal,
    speedBoostVertical,
    attackSpeedBoostHorizontal,
    attackSpeedBoostVertical,
  } = boostPosition;

  const map = useSelector((state) => state.map.map);
  const computerDestroyed = useSelector(
    (state) => state.computerTank.destroyed
  );
  const playerDestroyed = useSelector((state) => state.tank.destroyed);
  const [startGame, setStartGame] = useState(false);

  function startGameHandler() {
    setStartGame(true);
  }
  function playAgainHandler() {
    setStartGame(false);
    setBoostPosition({
      speedBoostHorizontal:
        Math.round(Math.random() * (window.innerWidth - 100)) + 100,
      speedBoostVertical:
        Math.round(Math.random() * (window.innerHeight - 100)) + 100,
      attackSpeedBoostHorizontal:
        Math.round(Math.random() * (window.innerWidth - 100)) + 100,
      attackSpeedBoostVertical:
        Math.round(Math.random() * (window.innerHeight - 100)) + 100,
    });
  }

  return (
    <React.Fragment>
      {!startGame && (
        <StartPage>
          <button
            className="game__button"
            onClick={map ? startGameHandler : undefined}
          >
            Start Game
          </button>
          <MapSelect />
          <Legend />
        </StartPage>
      )}
      {startGame && (
        <React.Fragment>
          <Maps />
          <SpeedBoost left={speedBoostHorizontal} top={speedBoostVertical} />
          <SpeedAttackBoost
            left={attackSpeedBoostHorizontal}
            top={attackSpeedBoostVertical}
          />
          <ComputerTank />
          <Tank
            speedBoostHorizontal={speedBoostHorizontal}
            speedBoostVertical={speedBoostVertical}
            attackSpeedBoostHorizontal={attackSpeedBoostHorizontal}
            attackSpeedBoostVertical={attackSpeedBoostVertical}
          />
        </React.Fragment>
      )}
      {startGame && (computerDestroyed || playerDestroyed) && (
        <PlayAgain playAgain={playAgainHandler} />
      )}
    </React.Fragment>
  );
}

export default App;
