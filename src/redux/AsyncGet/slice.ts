import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AsyncGetState, userData } from "../../types/types";
import { getUsers } from "./operations";

const initialState: AsyncGetState = {
  data: [],
  isLoading: false,
  isError: "",
};

const AsyncGetSlice = createSlice({
  name: "AsyncGetSlice",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<userData[]>) => {
          state.isLoading = false;
          state.isError = "";
          state.data = action.payload;
        }
      )
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
        state.data = [];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
          ? action.payload.toString()
          : "Unknown Error";
      });
  },
});

export const asyncGetReducer = AsyncGetSlice.reducer;
