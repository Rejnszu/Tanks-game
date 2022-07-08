import React, { useContext } from "react";
import { useState } from "react";
import Map from "./component/map/Map";
import Tank from "./component/tank/Tank";
import Legend from "./component/Legend/Legend";
import StartPage from "./component/startPage/StartPage";
import ComputerTank from "./component/tank/ComputerTank";

import PlayAgain from "./component/tryAgain/PlayAgain";
import ComputerTankContext from "./store/computerTank-context";

function App() {
  const [startGame, setStartGame] = useState(false);
  const compTankCtx = useContext(ComputerTankContext);
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
          <button className="game__button" onClick={startGameHandler}>
            Start Game
          </button>
          <Legend />
        </StartPage>
      )}
      {startGame && (
        <React.Fragment>
          <Map />

          <ComputerTank />
          <Tank />
        </React.Fragment>
      )}
      {startGame && compTankCtx.destroyed && (
        <PlayAgain playAgain={playAgainHandler} />
      )}
    </React.Fragment>
  );
}

export default App;
