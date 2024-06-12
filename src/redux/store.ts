import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./Count/slice";
import { asyncGetReducer } from "./AsyncGet/slice";

const rootReducer = combineReducers({
  countReducer,
  asyncGetReducer,
});

export const setStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type AppStore = ReturnType<typeof setStore>;
export type appDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
