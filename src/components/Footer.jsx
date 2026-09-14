import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      {/* glow divider */}
      <div className="footer-glow-line" />

      <div className="footer-cta">
        <div>
          <span className="footer-cta-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Let&apos;s make something <em>remarkable.</em></h2>
        </div>
        <a className="footer-cta-link" href="#contact" aria-label="Start a project conversation">
          <span>Start a conversation</span>
          <span className="footer-cta-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-kicker">INDEPENDENT DEVELOPER / 01</span>
          <h3>S.M. Kashan</h3>
          <p>Building premium web experiences with passion & precision.</p>
          <div className="footer-availability"><i /> Open to selected projects</div>
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
            <a href="https://www.linkedin.com/in/sheikh-kashan-1a72043a3/" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-line">
        <span>CRAFTED WITH INTENT</span>
        <span>SK / 2025</span>
      </div>

      <p className="footer-copy">
        © 2025 S.M. Kashan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
