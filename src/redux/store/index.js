// import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";

// const store = configureStore({ reducer: mainReducer });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { storage, persistConfig, persistedReducer } from "redux-persist";
import FavouritesRed from "../reducers/FavouritesRed";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootReducer = combineReducers({
  list: FavouritesRed,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
