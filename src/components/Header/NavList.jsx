import React from 'react';
import { NavLink } from 'react-router';

const NavList = ({ list }) => {
  return (
    <li>
      <NavLink to={list.path}>{list.name}</NavLink>
    </li>
  );
};

export default NavList;
