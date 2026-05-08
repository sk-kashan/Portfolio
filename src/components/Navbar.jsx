import React, { useState } from "react";
import logo from "../assets/logo2.png"; // <-- Replace with your logo path

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Image */}
      <div className="logo">
        <img src={logo} alt="S.M. Kashan Logo" className="logo-img" />
      </div>

      {/* Hamburger */}
      <div className={`hamburger ${open ? "toggle" : ""}`} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
