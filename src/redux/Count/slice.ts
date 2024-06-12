import { createSlice } from "@reduxjs/toolkit";
import { countState } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit/dist/react";

const initialState: countState = { count: 0 };

const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    incrementCount(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
    decrementCount(state, action: PayloadAction<number>) {
      state.count = state.count - action.payload;
    },
    defaultCount(state) {
      state.count = initialState.count;
    },
  },
});

export const countReducer = countSlice.reducer;
export const { incrementCount, decrementCount, defaultCount } =
  countSlice.actions;
