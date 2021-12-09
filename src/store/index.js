//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from './auth';

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//       state.counter++;
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increace") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if(action.type === 'decrement'){
//     return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//   }

//   if(action.type === 'toggle'){
//     return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//   }

//   return state;
// };

//const store = createStore(counterSlice.reducer); //we would have problems if we havedifferent slices

//const store = configureStore({reducer: counterSlice.reducer});
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
