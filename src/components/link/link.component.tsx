import { FC } from "react";
import { NavLink } from "react-router-dom";
import { LinkProps } from "./link.types";
import styled from "./link.module.scss";

export const Link: FC<LinkProps> = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styled.active : styled.link)}
      to={to}
    >
      {children}
    </NavLink>
  );
};
