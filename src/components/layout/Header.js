import React from "react";
import { FaCheckSquare } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaCheckSquare />
        <h2>MoDo</h2>
      </div>
    </nav>
  );
};

export default Header;
