import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore, combineReducers} from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import usersReducer from "../features/usersSlice";
import currentUserReducer from "../features/currentUserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  currentUser: currentUserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);
