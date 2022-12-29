import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <li className="nav-list">
        <Link className="nav-link" to="/images">
          Images
        </Link>
      </li>
      <li className="nav-list">
        <Link className="nav-link" to="/upload">
          Upload
        </Link>
      </li>
    </div>
  );
};
export default Navbar;
