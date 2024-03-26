import React from "react";
import { Link } from "react-router-dom";

const Lists = ({ text, path }) => {
  return (
    <li className="nav-lists rounded-[10px] p-2 m-2">
      <Link to={path}>{text}</Link>
    </li>
  );
};

export default Lists;
