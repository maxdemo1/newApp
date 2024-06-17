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

export const deleteUser = createAsyncThunk(
  "AsyncGetSlice/deleteUser",
  async (id: number, thunkAPI) => {
    try {
      const response = await fetch(
        `https://65b6adc4da3a3c16ab0111c7.mockapi.io/maxapi/v1/usersDatabase/${id}`,
        { method: "delete" }
      );
      if (response.ok) {
        return id;
      }
      throw new Error();
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const editUser = createAsyncThunk(
  "AsyncGetSlice/editUser",
  async (userData: userData, thunkAPI) => {
    try {
      const res = await fetch(
        `https://65b6adc4da3a3c16ab0111c7.mockapi.io/maxapi/v1/usersDatabase/${userData.id}`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (res.ok) {
        return userData;
      }
      throw new Error();
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const createUser = createAsyncThunk();
