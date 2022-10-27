import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import ganreOrCategoryReducer from "../features/currentGenreOrCategory";
import userReducer from "../features/auth";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: ganreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
