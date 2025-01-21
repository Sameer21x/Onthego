import React from "react";
import logo from "../../assets/images/whitelogo.png" // Import the image

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/rentals">Rentals</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
