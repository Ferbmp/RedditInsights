import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 45px;
  border-radius: 10px;
  font-size: 1rem;
  margin: 0px 4px;
  background-color: #e5e5e5;
  border: none;
  outline: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;
