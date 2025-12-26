import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      {/* glow divider */}
      <div className="footer-glow-line" />

      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <h3>S.M. Kashan</h3>
          <p>Building premium web experiences with passion & precision.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="socials">
            <a href="https://github.com/sk-kashan" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="www.linkedin.com/in/sheikh-kashan-1a72043a3" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 S.M. Kashan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
