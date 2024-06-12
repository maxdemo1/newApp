import React, { useEffect } from "react";
import { setOpenServices } from "../../types/types";
import CloseMiniApp from "../CloseMiniApp/CloseMiniApp";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/hooks";
import { getUsers } from "../../redux/AsyncGet/operations";
import SimpleUserData from "../UserCard/UserCard";
import TitleChange from "../TitleChange/TitleChange";

const UsersAdvancedOperations: React.FC<setOpenServices> = ({
  setOpenServices,
}) => {
  const dispatch = useTypedDispatch();
  const {
    data: usersData,
    isError,
    isLoading,
  } = useTypedSelector((state) => state.asyncGetReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <TitleChange componentName={UsersAdvancedOperations.name} />
      <CloseMiniApp
        setOpenServices={setOpenServices}
        appName={UsersAdvancedOperations.name}
      />
      {!isLoading && (
        <ul>
          {usersData &&
            usersData.map((user) => {
              return (
                <SimpleUserData
                  key={user.id}
                  userData={user}
                  showButtons={false}
                />
              );
            })}
        </ul>
      )}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{isError}</h2>}
    </div>
  );
};

export default UsersAdvancedOperations;
