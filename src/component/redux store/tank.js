import { createSlice } from "@reduxjs/toolkit";

const initialTankState = {
  horizontal: window.innerWidth * 0.5,
  vertical: window.innerHeight * 0.8,
  rotate: 0,
  destroyed: false,
};

const tankSlice = createSlice({
  name: "tank",
  initialState: initialTankState,
  reducers: {
    left(state) {
      state.horizontal = +state.horizontal - 30;
      state.rotate = -90;
    },

    right(state) {
      state.horizontal = +state.horizontal + 30;
      state.rotate = 90;
    },

    top(state) {
      state.vertical = +state.vertical - 30;
      state.rotate = 0;
    },
    down(state) {
      state.vertical = state.vertical + 30;
      state.rotate = 180;
    },
    resetLeft(state) {
      state.horizontal = +state.horizontal + 80;
      state.rotate = 90;
    },

    resetRight(state) {
      state.horizontal = +state.horizontal - 80;
      state.rotate = -90;
    },
    resetTop(state) {
      state.vertical = +state.vertical + 80;
      state.rotate = 180;
    },
    resetDown(state) {
      state.vertical = +state.vertical - 80;
      state.rotate = 0;
    },
    reset(state) {
      state.horizontal = window.innerWidth * 0.5;
      state.vertical = window.innerHeight * 0.8;
      state.rotate = 0;
      state.destroyed = false;
    },
    destroy(state) {
      state.destroyed = true;
    },
  },
});

export const tankActions = tankSlice.actions;
export default tankSlice.reducer;
