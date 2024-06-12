import React from "react";
import { serviceStateChanger } from "../../types/types";

const NavButtons: React.FC<{ serviceStateChanger: serviceStateChanger }> = ({
  serviceStateChanger,
}) => {
  return (
    <ul>
      <li>
        <button
          type="button"
          onClick={() => {
            serviceStateChanger("Count");
          }}
        >
          Counter (Redux Toolkit)
        </button>
      </li>

      <li>
        <button
          type="button"
          onClick={() => {
            serviceStateChanger("UsersOperationGET");
          }}
        >
          Async Redux simple GET
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            serviceStateChanger("UsersAdvancedOperations");
          }}
        >
          Users Operations
        </button>
      </li>
    </ul>
  );
};

export default NavButtons;
