import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand-group">
        <div className="logo" aria-label="SK brand logo">
          SK
        </div>
        <span className="brand-caption">FULL-STACK / DIGITAL</span>
      </div>

      <button
        className={`hamburger ${open ? "toggle" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

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
