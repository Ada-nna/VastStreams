import React from "react";
import Logo from "../../../assets/hero/logo_movie.png";
import Lists from "./lists";

export const orderedLists = [
  { text: "Home", path: "/" },
  { text: "Movies & Shows", path: "/" },
  { text: "Support", path: "/" },
  { text: "Subscriptions", path: "/" },
];

const Navbar = () => {
  const navbarLists = orderedLists.map((item, index) => (
    <Lists key={index} text={item.text} path={item.path} />
  ));

  return (
    <div className="flex w-[100%] items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="logo" className="logo2 w-[4rem]" />
        <h1 className="logo logoText text-[1.5rem] font-bold">VastStreams</h1>
      </div>
      <ul className="hidden lg:flex border-[#474747] border-2 rounded-[10px] me-[15.5rem] text-[17px] justify-between">
        {navbarLists}
      </ul>
      <div className="flex space-x-4">
        {/* this is the search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* this is the bell icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
