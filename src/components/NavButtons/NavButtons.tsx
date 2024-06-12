import React from "react";

import { NavLink } from "react-router-dom";

const NavButtons: React.FC = () => {
  return (
    <nav>
      <NavLink to="redux_counter">Counter (Redux Toolkit)</NavLink>
      <NavLink to="redux_simple_get">Async Redux simple GET</NavLink>
      <NavLink to="redux_advanced_async">Users Operations</NavLink>
    </nav>
  );
};

export default NavButtons;
