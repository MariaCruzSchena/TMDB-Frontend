import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const setDBUsers = createAction("SET_DB_USERS");

//Reducer
const initialState = [JSON.parse(window.localStorage.getItem("dbUsers"))];

const dbUsersReducer = createReducer(initialState, {
  [setDBUsers]: (state, action) => action.payload,
});

export default  dbUsersReducer;
