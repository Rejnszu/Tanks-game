import React from "react";
import { useState } from "react";
import Map from "./component/map/Map";
import Tank from "./component/tank/Tank";
import Legend from "./component/Legend/Legend";
import StartPage from "./component/startPage/StartPage";
function App() {
  const [startGame, setStartGame] = useState(false);
  function startGameHandler() {
    setStartGame(true);
  }
  return (
    <React.Fragment>
      {!startGame && (
        <StartPage>
          <button className="game-start__button" onClick={startGameHandler}>
            Start Game
          </button>
          <Legend />
        </StartPage>
      )}
      {startGame && (
        <Map>
          <Tank />
        </Map>
      )}
    </React.Fragment>
  );
}

export default App;
