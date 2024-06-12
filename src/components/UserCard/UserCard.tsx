import React from "react";
import { usersProps } from "../../types/types";

const SimpleUserData: React.FC<usersProps> = ({
  userData,
  advancedOptions,
}) => {
  const { name, username, email } = userData;
  return (
    <div style={{ border: "1px, solid, black" }}>
      {advancedOptions && (
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      )}
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default SimpleUserData;
