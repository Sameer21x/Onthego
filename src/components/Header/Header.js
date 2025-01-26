import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/whitelogo.png";
import { Menu, X } from 'lucide-react';
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? "active" : "";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("body-lock", !isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo || "/placeholder.svg"} alt="Logo" />
        </Link>
      </div>
      <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" className={isActive("/")} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/rentals" className={isActive("/rentals")} onClick={toggleMenu}>Rentals</Link></li>
          <li><Link to="/faq" className={isActive("/faq")} onClick={toggleMenu}>FAQs</Link></li>
          <li><Link to="/about" className={isActive("/about")} onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" className={isActive("/contact")} onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
