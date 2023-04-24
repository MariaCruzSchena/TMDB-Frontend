const {createAction, createReducer} = require('@reduxjs/toolkit')
//import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const setSearchQuery = createAction("SET_SEARCH_QUERY")


//Reducer
const initialState = "";

const searchReducer = createReducer(initialState, {  
  [setSearchQuery]: (state, action) => action.payload, 
});

export default searchReducer;
