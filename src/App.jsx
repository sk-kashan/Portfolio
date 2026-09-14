import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./theme-portfolio/blue-neon.css"
import Skills from "./sections/Skills";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`loading-screen ${isLoading ? "is-visible" : "is-hidden"}`} aria-live="polite" aria-label="Loading portfolio">
        <div className="loading-shell">
          <span className="loading-kicker">SMK / DIGITAL PORTFOLIO</span>
          <div className="loading-core">
            <div className="loading-orbit loading-orbit-one" />
            <div className="loading-mark">SK</div>
          </div>
          <div className="loading-copy">
            <span className="loading-label">LOADING PORTFOLIO</span>
            <span className="loading-percent">00 / 100</span>
          </div>
          <div className="loading-track"><span /></div>
          <span className="loading-note">PREPARING YOUR EXPERIENCE</span>
        </div>
      </div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;