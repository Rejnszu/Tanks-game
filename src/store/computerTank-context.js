import { useState, useReducer } from "react";
import React from "react";
const ComputerTankContext = React.createContext({
  destroyed: false,
  position: {},
  destroyComputerTank: () => {},
  repairComputerTank: () => {},
  moveComputerTank: () => {},
});

const actionTypes = ["left", "right", "top", "down"];
const initialState = {
  horizontal: Math.round(Math.random() * (window.innerWidth - 30)) + 30,
  vertical: Math.round(Math.random() * (window.innerHeight - 30)) + 30,
  rotate: 0,
};
function compTankReducer(state, action) {
  if (action.type === "left") {
    return {
      horizontal: state.horizontal - 100,
      vertical: state.vertical,
      rotate: -90,
    };
  }
  if (action.type === "right") {
    return {
      horizontal: state.horizontal + 100,
      vertical: state.vertical,
      rotate: 90,
    };
  }
  if (action.type === "top") {
    return {
      horizontal: +state.horizontal,
      vertical: +state.vertical - 100,
      rotate: 0,
    };
  }
  if (action.type === "down") {
    return {
      horizontal: state.horizontal,
      vertical: state.vertical + 100,
      rotate: 180,
    };
  }
  if (action.type === "resetLeft") {
    return {
      horizontal: state.horizontal + 100,
      vertical: state.vertical,
      rotate: 90,
    };
  }
  if (action.type === "resetRight") {
    return {
      horizontal: state.horizontal - 100,
      vertical: state.vertical,
      rotate: -90,
    };
  }
  if (action.type === "resetTop") {
    return {
      horizontal: state.horizontal,
      vertical: state.vertical + 100,
      rotate: 180,
    };
  }
  if (action.type === "resetDown") {
    return {
      horizontal: state.horizontal,
      vertical: state.vertical - 100,
      rotate: 0,
    };
  }
  if (action.type === "reset") {
    return {
      horizontal: Math.round(Math.random() * (window.innerWidth - 30)) + 30,
      vertical: Math.round(Math.random() * (window.innerHeight - 30)) + 30,
      rotate: 0,
    };
  }

  return initialState;
}
export const ComputerTankContextProvider = (props) => {
  const [tankState, dispatchComputerTank] = useReducer(
    compTankReducer,
    initialState
  );

  const [destroyed, setDestroyed] = useState(false);
  function destroyComputerTank() {
    setDestroyed(true);
  }
  function repairComputerTank() {
    setDestroyed(false);
    dispatchComputerTank({ type: "reset" });
  }
  const { horizontal, vertical } = tankState;
  function moveComputerTank() {
    if (
      100 <= horizontal &&
      horizontal < window.innerWidth - 100 &&
      100 < vertical &&
      vertical < window.innerHeight - 100
    ) {
      dispatchComputerTank({
        type: actionTypes[Math.round(Math.random() * (actionTypes.length - 1))],
      });
    } else {
      if (horizontal <= 100) {
        dispatchComputerTank({ type: "resetLeft" });
      }
      if (horizontal >= window.innerWidth - 100) {
        dispatchComputerTank({ type: "resetRight" });
      }
      if (vertical <= 100) {
        dispatchComputerTank({ type: "resetTop" });
      }
      if (vertical >= window.innerHeight - 100) {
        dispatchComputerTank({ type: "resetDown" });
      }
    }
  }

  const contextValue = {
    destroyed: destroyed,
    position: tankState,
    destroyComputerTank: destroyComputerTank,
    repairComputerTank: repairComputerTank,
    moveComputerTank: moveComputerTank,
  };

  return (
    <ComputerTankContext.Provider value={contextValue}>
      {props.children}
    </ComputerTankContext.Provider>
  );
};
export default ComputerTankContext;
