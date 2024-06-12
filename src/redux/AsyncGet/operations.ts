import { createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../../types/types";

export const getUsers = createAsyncThunk(
  "AsyncGetSlice/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://65b6adc4da3a3c16ab0111c7.mockapi.io/maxapi/v1/usersDatabase"
      );
      const data: userData[] = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);
