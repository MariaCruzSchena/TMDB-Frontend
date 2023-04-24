import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const setUser = createAction("SET_USER");

//Reducer
const initialState = JSON.parse(window.localStorage.getItem("user"));

const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});

export default userReducer;
