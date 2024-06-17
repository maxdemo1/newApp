import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/hooks";
import { getUsers } from "../../redux/Users/operations";

import { useLocation } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import { selectFilteredContacts } from "../../redux/Users/selectors";
import Loading from "../Loading/Loading";

const UsersList = () => {
  const [editedContact, setEditedContact] = useState<boolean | number>(false);
  const [advancedOption, setAdvancedOptions] = useState(false);
  const location = useLocation();

  const dispatch = useTypedDispatch();
  const { isError, isLoading } = useTypedSelector(
    (state) => state.asyncGetReducer
  );
  const usersData = useTypedSelector(selectFilteredContacts);

  useEffect(() => {
    if (location.pathname === "/redux_advanced_async") {
      setAdvancedOptions(true);
    } else {
      setAdvancedOptions(false);
    }
    dispatch(getUsers());
  }, [location.pathname, dispatch]);

  return (
    <>
      <ul>
        {isLoading && <Loading />}
        {usersData &&
          usersData?.length !== 0 &&
          usersData.map((user) => {
            return (
              <UserCard
                key={user.id}
                userData={user}
                advancedOptions={advancedOption}
                editedContact={editedContact}
                setEditedContact={setEditedContact}
              />
            );
          })}
      </ul>

      {isError && <h2>{isError}</h2>}
    </>
  );
};

export default UsersList;
