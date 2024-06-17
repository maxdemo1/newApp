import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AsyncGetState, userData } from "../../types/types";
import { deleteUser, editUser, getUsers } from "./operations";

const initialState: AsyncGetState = {
  data: [],
  isLoading: false,
  isError: "",
  query: "",
};

const loadingErrorFulfiled = (state: Omit<AsyncGetState, "data" | "query">) => {
  state.isError = "";
  state.isLoading = false;
};
const loadingErrorPending = (state: Omit<AsyncGetState, "data" | "query">) => {
  state.isError = "";
  state.isLoading = true;
};

const AsyncGetSlice = createSlice({
  name: "AsyncGetSlice",
  initialState,
  reducers: {
    searchUser(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builer) => {
    builer
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<userData[]>) => {
          loadingErrorFulfiled(state);
          state.data = action.payload;
        }
      )
      .addCase(getUsers.pending, (state) => {
        loadingErrorPending(state);
        state.data = [];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
          ? action.payload.toString()
          : "Unknown Error";
      })
      .addCase(deleteUser.pending, loadingErrorPending)
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
          ? action.payload.toString()
          : "Unknown Error";
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        loadingErrorFulfiled(state);
        state.data = state.data.filter((user) => user.id !== action.payload);
      })
      .addCase(editUser.pending, loadingErrorPending)
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
          ? action.payload.toString()
          : "Unknown Error";
      })
      .addCase(editUser.fulfilled, (state, action: PayloadAction<userData>) => {
        loadingErrorFulfiled(state);
        state.data[
          state.data.findIndex((user) => {
            return user.id === action.payload.id;
          })
        ] = action.payload;
      });
  },
});
export const { searchUser } = AsyncGetSlice.actions;
export const asyncGetReducer = AsyncGetSlice.reducer;
