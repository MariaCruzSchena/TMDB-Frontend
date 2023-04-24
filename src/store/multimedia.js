import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const setSearchedMultimedia = createAction("SET_SEARCH_MULTIMEDIA");
export const setMovies = createAction("SET_MOVIES");
export const setTv = createAction("SET_TV");

//Reducer
const initialState = {
  multimedia: [],
  movies: [],
  tv: [],
};

const multimediaReducer = createReducer(initialState, {
  [setSearchedMultimedia]: (state, action) => {
    const media = action.payload;
    const uniqueMedia = [];
    media.forEach((media) => {
      if (!uniqueMedia.some((m) => m.id === media.id)) {
        uniqueMedia.push(media);
      }
    });
    return { ...state, multimedia: uniqueMedia };
  },
  [setMovies]: (state, action) => {
    const media = action.payload;
    const uniqueMedia = [];

    media.forEach((media) => {
      if (!uniqueMedia.some((m) => m.id === media.id)) {
        uniqueMedia.push(media);
      }
    });

    const movies = uniqueMedia.filter((media) => media.media_type === "movie");
    return { ...state, movies: movies };
  },
  [setTv]: (state, action) => {
    const media = action.payload;
    const uniqueMedia = [];

    media.forEach((media) => {
      if (!uniqueMedia.some((m) => m.id === media.id)) {
        uniqueMedia.push(media);
      }
    });

    const tv = uniqueMedia.filter((media) => media.media_type === "tv");
    return { ...state, tv: tv };
  },
});

export default multimediaReducer;
