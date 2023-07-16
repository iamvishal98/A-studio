import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1>
        <span className="bold">A+</span> Studio
      </h1>
      <ul className="menu-items">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#whatwedo">what we do</a>
        </li>
        <li>
          <a href="#service">service</a>
        </li>
        <li>
          <a href="#project">project</a>
        </li>
        <li>
          <a href="#blog">blog</a>
        </li>
        <li onClick={() => navigate("/contact")}>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
