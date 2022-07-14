import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSelect";
import computerTankReducer from "./computerTank";
const store = configureStore({
  reducer: {
    computerTank: computerTankReducer,
    map: mapReducer,
  },
});

export default store;
