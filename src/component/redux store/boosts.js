import { createSlice } from "@reduxjs/toolkit";

const initialBoostsState = {
  speedBoostActive: true,
  attackSpeedBoostActive: true,
};

const boostsSlice = createSlice({
  name: "boosts",
  initialState: initialBoostsState,
  reducers: {
    speedBoostHandler(state) {
      state.speedBoostActive = false;
    },
    attackSpeedBoostHandler(state) {
      state.attackSpeedBoostActive = false;
    },
    resetBoosts(state) {
      state.speedBoostActive = true;
      state.attackSpeedBoostActive = true;
    },
  },
});
export const boostsActions = boostsSlice.actions;
export default boostsSlice.reducer;
