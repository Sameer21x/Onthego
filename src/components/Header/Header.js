import React from "react";
import logo from "../../assets/images/whitelogo.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"> 
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rentals">Rentals</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
