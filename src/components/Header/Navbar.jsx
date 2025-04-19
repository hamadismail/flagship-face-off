import React from 'react';
import NavList from './NavList';
import { MdBookmarks, MdShoppingCart } from 'react-icons/md';

const Navbar = () => {
  const listData = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
  ];

  const lists = listData.map(list => <NavList key={list.id} list={list} />);

  const iconList = [
    { id: 3, name: <MdShoppingCart />, path: '/cart' },
    { id: 4, name: <MdBookmarks />, path: '/favourite' },
  ];

  const iconLists = iconList.map(icon => <NavList key={icon.id} list={icon} />);

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar p-0 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer lg:hidden mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {lists}
              <ul className="flex">{iconLists}</ul>
            </ul>
          </div>
          <a className="cursor-pointer text-xl font-medium">FlagshipFaceOff</a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {lists} {iconLists}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
