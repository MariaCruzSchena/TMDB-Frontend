import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import dbUsersReducer from "./dbUsers";
import userSearchReducer from "./userSearch";
import multimediaReducer from "./multimedia";
import searchReducer from "./search";
import itemReducer from "./item";
import favoritesReducer from "./favorites";

const store = configureStore({
  reducer: {
    user: userReducer,
    dbUsers: dbUsersReducer,
    userSearch: userSearchReducer,
    multimedia: multimediaReducer,
    search: searchReducer,
    item: itemReducer,
    favorites: favoritesReducer
  },
});

export default store;
