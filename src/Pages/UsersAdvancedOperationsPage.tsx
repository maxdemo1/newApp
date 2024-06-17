import React from "react";

import UsersList from "../components/UsersList/UsersList";
import UserSearch from "../components/UserSearch/UserSearch";
import AddUser from "../components/AddUser/AddUser";

const UsersAdvancedOperationsPage = () => {
  return (
    <main>
      <AddUser />
      <UserSearch />
      <UsersList />
    </main>
  );
};

export default UsersAdvancedOperationsPage;
