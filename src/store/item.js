import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const setSelectedItem = createAction("SET_SELECTED_ITEM");

//Reducer
const initialState = {};

const itemReducer = createReducer(initialState, {
  [setSelectedItem]: (state, action) => action.payload,
});

export default itemReducer;
