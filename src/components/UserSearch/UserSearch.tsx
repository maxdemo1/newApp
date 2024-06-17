import React, { FormEvent } from "react";
import { searchUser } from "../../redux/Users/slice";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/hooks";
import { userSearchQuerySelector } from "../../redux/Users/selectors";

const UserSearch = () => {
  const dispatch = useTypedDispatch();
  const searchUsers = (e: FormEvent<HTMLInputElement>) => {
    dispatch(searchUser(e.currentTarget.value));
  };

  const clearSearchQuery = () => {
    dispatch(searchUser(""));
  };

  const searchQuery = useTypedSelector(userSearchQuerySelector);
  return (
    <form name="userSearch">
      <input
        type="text"
        placeholder="Search user"
        value={searchQuery}
        onChange={(e) => {
          searchUsers(e);
        }}
      />
      <button type="button" onClick={clearSearchQuery}>
        Clear
      </button>
    </form>
  );
};

export default UserSearch;
