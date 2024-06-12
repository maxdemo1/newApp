import React, { useEffect } from "react";
import { setOpenServices } from "../../types/types";
import { getUsers } from "../../redux/AsyncGet/operations";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/hooks";
import SimpleUserData from "../UserCard/UserCard";
import CloseMiniApp from "../CloseMiniApp/CloseMiniApp";
import TitleChange from "../TitleChange/TitleChange";

const UsersOperationGET: React.FC<setOpenServices> = ({ setOpenServices }) => {
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
      <TitleChange componentName={UsersOperationGET.name} />
      <CloseMiniApp
        setOpenServices={setOpenServices}
        appName={UsersOperationGET.name}
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

export default UsersOperationGET;
