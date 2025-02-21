import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icon hamburger dan close
import "../styles/Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setOpenMenu(null); // Tutup submenu saat membuka/menutup mobile menu
    }
  };

  // Tutup submenu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown") && !event.target.closest(".hamburger-menu")) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo">Exel Mandiri Inovasi</div>

      {/* Tombol Hamburger */}
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={24} color="white" /> : <FiMenu size={24} color="white" />}
      </button>

      {/* Navigasi Menu */}
      <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>

          <li className="dropdown">
            <button onClick={() => toggleSubMenu("about")}>About Us</button>
            {openMenu === "about" && (
              <ul className="submenu">
                <li><Link to="/company-profile" onClick={() => setIsMobileMenuOpen(false)}>Company Profile</Link></li>
                <li><Link to="/vision-mission" onClick={() => setIsMobileMenuOpen(false)}>Vision & Mission</Link></li>
                <li><Link to="/awards" onClick={() => setIsMobileMenuOpen(false)}>Awards & Certifications</Link></li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <button onClick={() => toggleSubMenu("products")}>Products & Services</button>
            {openMenu === "products" && (
              <ul className="submenu">
                <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Types of Services</Link></li>
                <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Types of Products</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/csr" onClick={() => setIsMobileMenuOpen(false)}>CSR</Link></li>
          <li><Link to="/clients" onClick={() => setIsMobileMenuOpen(false)}>Clients & Partners</Link></li>
          <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
