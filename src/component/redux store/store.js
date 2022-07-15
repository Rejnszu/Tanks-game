import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSelect";
import computerTankReducer from "./computerTank";
import tankReducer from "./tank";
const store = configureStore({
  reducer: {
    tank: tankReducer,
    computerTank: computerTankReducer,
    map: mapReducer,
  },
});

export default store;
