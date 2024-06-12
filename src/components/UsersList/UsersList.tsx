import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/hooks";
import { getUsers } from "../../redux/AsyncGet/operations";
import SimpleUserData from "../UserCard/UserCard";
import { useLocation } from "react-router-dom";

const UsersList = () => {
  const [advancedOption, setAdvancedOptions] = useState(false);
  const location = useLocation();

  const dispatch = useTypedDispatch();
  const {
    data: usersData,
    isError,
    isLoading,
  } = useTypedSelector((state) => state.asyncGetReducer);

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
      {!isLoading && (
        <ul>
          {usersData &&
            usersData.map((user) => {
              return (
                <SimpleUserData
                  key={user.id}
                  userData={user}
                  advancedOptions={advancedOption}
                />
              );
            })}
        </ul>
      )}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{isError}</h2>}
    </>
  );
};

export default UsersList;
