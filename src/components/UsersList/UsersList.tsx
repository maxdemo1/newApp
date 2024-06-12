import React from "react";

const UsersList = () => {
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
                  showButtons={false}
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
