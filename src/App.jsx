import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./theme-portfolio/orange.css"
import Skills from "./sections/Skills";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
function App() {
  return (
    <>
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