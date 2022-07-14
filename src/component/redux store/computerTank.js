import { createSlice } from "@reduxjs/toolkit";

const initialComputerTankState = {
  horizontal: Math.round(Math.random() * (window.innerWidth - 30)) + 30,
  vertical: Math.round(Math.random() * (window.innerHeight - 30)) + 30,
  rotate: 0,
  destroyed: false,
};

const computerTankSlice = createSlice({
  name: "computerTank",
  initialState: initialComputerTankState,
  reducers: {
    left(state) {
      state.horizontal = +state.horizontal - 100;
      state.rotate = -90;
    },

    right(state) {
      state.horizontal = +state.horizontal + 100;
      state.rotate = 90;
    },

    top(state) {
      state.vertical = +state.vertical - 100;
      state.rotate = 0;
    },
    down(state) {
      state.vertical = state.vertical + 100;
      state.rotate = 180;
    },
    resetLeft(state) {
      state.horizontal = +state.horizontal + 100;
      state.rotate = 90;
    },

    resetRight(state) {
      state.horizontal = +state.horizontal - 100;
      state.rotate = -90;
    },
    resetTop(state) {
      state.vertical = +state.vertical + 100;
      state.rotate = 180;
    },
    resetDown(state) {
      state.vertical = +state.vertical - 100;
      state.rotate = 0;
    },
    reset(state) {
      state.horizontal =
        Math.round(Math.random() * (window.innerWidth - 30)) + 30;
      state.vertical =
        Math.round(Math.random() * (window.innerHeight - 30)) + 30;
      state.rotate = 0;
    },
    destroy(state) {
      state.destroyed = true;
    },
    repair(state) {
      state.destroyed = false;
    },
  },
});

export const computerTankActions = computerTankSlice.actions;
export default computerTankSlice.reducer;
