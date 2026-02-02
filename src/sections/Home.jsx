import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const titles = [
    "Full-stack Developer",
    "Software Engineer",
    "Database Administrator",
    "Backend Developer",
  ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const [openModal, setOpenModal] = useState(false);

useEffect(() => {
  const currentTitle = titles[titleIndex];

  let timeout;

  if (!deleting && charIndex < currentTitle.length) {
    
    timeout = setTimeout(() => {
      setText(currentTitle.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 120);
  } 
  else if (!deleting && charIndex === currentTitle.length) {
  
    timeout = setTimeout(() => {
      setDeleting(true);
    }, 1200); 
  } 
  else if (deleting && charIndex > 0) {
    
    timeout = setTimeout(() => {
      setText(currentTitle.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    }, 60);
  } 
  else if (deleting && charIndex === 0) {
    
    setDeleting(false);
    setTitleIndex((prev) => (prev + 1) % titles.length);
  }

  return () => clearTimeout(timeout);
}, [charIndex, deleting, titleIndex]);

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="name">S.M.Kashan</span> <br />
            <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </h1>

          <p>Frontend • Backend • Modern Web Solutions</p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setOpenModal(true)}>
              Hire Me
            </button>
            <a className="secondary-btn" href="#portfolio">
              Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT MODAL ===== */}
      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(false)}>
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setOpenModal(false)}>
              ✕
            </button>

            <h2>Contact Me</h2>

            <div className="contact-info">
              <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> : <span>sheikhkashanqadir@gmail.com</span></p>
              <p><FontAwesomeIcon className="icon" icon={faPhone} /> : <span>+923208208115</span></p>
              <p><FontAwesomeIcon className="icon" icon={faGithub} /> : <span>github.com/sk-kashan</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
