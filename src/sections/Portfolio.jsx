import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: 1,
    title: "Event Management System",
    tech: ["React", "Node.js", "MongoDB", "ExpressJS", "FetchAPI", "ShadeCN", "Tailwind CSS", "Cloudinary"],
    desc: "A full-stack event management platform.",
    img: "/img.png",
    repo: "https://github.com/sk-kashan/Event-management",
  },
  {
    id: 2,
    title: "My Portfolio",
    tech: ["ReactJS", "HTML", "CSS", "EmailJS"],
    desc: "Personal developer portfolio website.",
    img: "/img2.png",
    repo: "https://github.com/sk-kashan/Portfolio",
  },
  {
    id: 3,
    title: "Currency Converter App",
    tech: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "TailwindCSS", "JWT", "RestAPI"],
    desc: "A Currency Converter App",
    img: "/img3.png",
    repo: "https://github.com/sk-kashan/Currency-converter",
  },
  {
    id: 4,
    title: "To-Do App",
    tech: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "TailwindCSS", "JWT", "RestAPI"],
    desc: "A To-do App",
    img: "/img4.png",
    repo: "https://github.com/sk-kashan/todo-app",
  },
  {
    id: 5,
    title: "Weather App",
    tech: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "OpenWeather API", "TailwindCSS"],
    desc: "Weather forecasting app",
    img: "/img5.png",
    repo: "https://github.com/sk-kashan/weather-app",
  },
    {
    id: 6,
    title: "Goblin's Gaunlet",
    tech: ["HTML5", "CSS3", "Vanilla Javascript"],
    desc: "A Javascript Based game",
    img: "/image.png",
    repo: "https://github.com/sk-kashan/goblin-gaunlet",
  },
];

function Portfolio() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, []);

  /* 📱 TOUCH SWIPE */
  const touchStart = (e) => (startX.current = e.touches[0].clientX);
  const touchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 60) next();
    if (diff < -60) prev();
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Projects</h2>

      <div
        className="portfolio-carousel"
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        <button className="carousel-arrow left" onClick={prev}>‹</button>

        <div className="carousel-stage">
          {projects.map((project, i) => {
            let pos =
              i === index ? "active" :
              i === index - 1 || (index === 0 && i === projects.length - 1) ? "prev" :
              i === index + 1 || (index === projects.length - 1 && i === 0) ? "next" :
              "hidden";

            return (
              <div className={`portfolio-card ${pos}`} key={project.id}>
                <div className="portfolio-img-wrapper">
                  <img src={project.img} alt={project.title} />
                  <a href={project.repo} target="_blank" rel="noreferrer" className="github-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>

                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <div className="tech-stack">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-box">{t}</span>
                    ))}
                  </div>
                  <p>{project.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-arrow right" onClick={next}>›</button>
      </div>
    </section>
  );
}

export default Portfolio;
