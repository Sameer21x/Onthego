import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from 'lucide-react'; // Import icons
import logo from "../../assets/images/whitelogo.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("body-lock", !isMenuOpen);
  };

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.pathname !== path) {
      setTimeout(() => {
        window.location.href = path;
      }, 300);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo and Social Icons Grouped Together */}
        <div className="logo-social">
          <div className="logo">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <img src={logo || "/placeholder.svg"} alt="Logo" />
            </Link>
          </div>
          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://m.facebook.com/onthegomed?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Facebook size={35} />
            </a>
            <a href="https://www.instagram.com/onthegomedical/" target="_blank" rel="noopener noreferrer">
              <Instagram size={35} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" className={isActive("/")} onClick={() => handleLinkClick("/")}>Home</Link></li>
          <li><Link to="/rentals" className={isActive("/rentals")} onClick={() => handleLinkClick("/rentals")}>Rentals</Link></li>
          <li><Link to="/faq" className={isActive("/faq")} onClick={() => handleLinkClick("/faq")}>FAQs</Link></li>
          <li><Link to="/about" className={isActive("/about")} onClick={() => handleLinkClick("/about")}>About Us</Link></li>
          <li><Link to="/contact" className={isActive("/contact")} onClick={() => handleLinkClick("/contact")}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
