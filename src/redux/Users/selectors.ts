import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const userSearchQuerySelector = (state: RootState) =>
  state.asyncGetReducer.query;

export const usersDataSelector = (state: RootState) =>
  state.asyncGetReducer.data;

export const selectFilteredContacts = createSelector(
  [usersDataSelector, userSearchQuerySelector],
  (usersData, searchQuery) => {
    if (usersData.length === 0) {
      return;
    }
    if (searchQuery === "") {
      return usersData;
    }
    const res = usersData.filter((user) => {
      for (const key in user) {
        const value = user[key];
        if (
          typeof value === "string" &&
          value.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        ) {
          return true;
        }
      }
    });
    return res;
  }
);
