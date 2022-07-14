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

function App() {
  const map = useSelector((state) => state.map.map);
  const destroyed = useSelector((state) => state.computerTank.destroyed);
  const [startGame, setStartGame] = useState(false);

  function startGameHandler() {
    setStartGame(true);
  }
  function playAgainHandler() {
    setStartGame(false);
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

          <ComputerTank />
          <Tank />
        </React.Fragment>
      )}
      {startGame && destroyed && <PlayAgain playAgain={playAgainHandler} />}
    </React.Fragment>
  );
}

export default App;
