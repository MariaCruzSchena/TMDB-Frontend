import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFavorites = createAction("SET_FAVORITES");

const initialState = [];


//Reducer
const favoritesReducer = createReducer(initialState, {
  [setFavorites]: (state, action) => {
    return action.payload;
  },  
});

export default favoritesReducer;
