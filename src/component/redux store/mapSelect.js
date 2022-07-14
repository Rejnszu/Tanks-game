import { createSlice } from "@reduxjs/toolkit";
const initialMapState = { map: null };
const mapSlice = createSlice({
  name: "authentication",
  initialState: initialMapState,
  reducers: {
    setMap(state, action) {
      state.map = action.payload;
    },
  },
});
export const mapActions = mapSlice.actions;
export default mapSlice.reducer;
