import React from 'react';
import { NavLink } from 'react-router';

const NavList = ({ list }) => {
  return (
    <li className="text-lg">
      <NavLink to={list.path}>{list.name}</NavLink>
    </li>
  );
};

export default NavList;
