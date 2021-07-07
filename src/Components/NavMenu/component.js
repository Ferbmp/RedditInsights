import React from "react";
import { NavContainer, NavButton } from "./style";
function Navmenu() {
  return (
    <NavContainer>
      <NavButton
        to="/hot"
        activeStyle={{
          background: "#6023c1",
        }}
      >
        Hot
      </NavButton>
      <NavButton
        to="/new"
        activeStyle={{
          background: "#6023c1",
        }}
      >
        New
      </NavButton>
      <NavButton
        to="/rising"
        activeStyle={{
          background: "#6023c1",
        }}
      >
        Rising
      </NavButton>
    </NavContainer>
  );
}

export default Navmenu;
