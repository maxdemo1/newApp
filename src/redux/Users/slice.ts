import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AsyncGetState, userData } from "../../types/types";
import { deleteUser, editUser, getUsers } from "./operations";

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
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
          ? action.payload.toString()
          : "Unknown Error";
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.isError = "";
        state.isLoading = false;
        state.data = state.data.filter((user) => user.id !== action.payload);
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
          ? action.payload.toString()
          : "Unknown Error";
      })
      .addCase(editUser.fulfilled, (state, action: PayloadAction<userData>) => {
        state.isLoading = false;
        state.isError = "";
        state.data = [...state.data];
        console.log(
          state.data.findIndex((user) => {
            return user.id === action.payload.id;
          })
        );
      });
  },
});

export const asyncGetReducer = AsyncGetSlice.reducer;
