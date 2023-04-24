import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const setSearchedUserId = createAction("SET_SEARCHED_USER_ID");

//Reducer
const initialState = JSON.parse(localStorage.getItem("currentId"));

const userSearchReducer = createReducer(initialState, {
  [setSearchedUserId]: (state, action) => action.payload,
});

export default  userSearchReducer;
