import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import templateSlice from "./slices/templateSlice/templateSlice";
import uiSlice from './slices/uiSlice/uiSlice';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// add all slices reducer in this reducer object
const rootReducer = combineReducers({
  template: templateSlice,
  // ui: uiSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof rootReducer>;
