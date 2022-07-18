import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSelect";
import computerTankReducer from "./computerTank";
import tankReducer from "./tank";
import boostsReducer from "./boosts";
const store = configureStore({
  reducer: {
    tank: tankReducer,
    computerTank: computerTankReducer,
    map: mapReducer,
    boosts: boostsReducer,
  },
});

export default store;
