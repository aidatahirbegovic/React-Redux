import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //we can write like this here, but we still cant manipulate
      //it clones this code, and overwrites state-translated into imutable code
    },
    decrement(state) {
      state.counter--;
    },
    increace(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;