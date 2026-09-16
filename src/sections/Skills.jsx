import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { SiGithubcopilot, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiTailwindcss, SiVscodium } from "react-icons/si";

const technologyIcons = {
  "React.js": { type: "fa", icon: faReact },
  "Angular.js": { type: "fa", icon: faAngular },
  "Bootstrap": { type: "fa", icon: faBootstrap },
  "HTML": { type: "fa", icon: faHtml5 },
  "CSS": { type: "fa", icon: faCss3Alt },
  "Git": { type: "fa", icon: faGitAlt },
  "GitHub": { type: "fa", icon: faGithub },
  "Node.js": { type: "fa", icon: faNodeJs },
  "Tailwind CSS": { type: "react", icon: SiTailwindcss },
  "Postman": { type: "react", icon: SiPostman },
  "MongoDB": { type: "react", icon: SiMongodb },
  "MySQL": { type: "react", icon: SiMysql },
  "PostgreSQL": { type: "react", icon: SiPostgresql },
  "VS Code": { type: "react", icon: SiVscodium },
  "GitHub Copilot": { type: "react", icon: SiGithubcopilot },
  "JavaScript": { type: "react", icon: SiJavascript },
};

const technologyColors = {
  "React.js": "#61dafb", "Angular.js": "#dd0031", "Bootstrap": "#7952b3",
  "HTML": "#e34f26", "CSS": "#1572b6", "Git": "#f05032", "GitHub": "#fff",
  "Node.js": "#68a063", "Tailwind CSS": "#38bdf8", "Postman": "#ff6c37",
  "JavaScript": "#f7df1e",
  "MongoDB": "#47a248", "MySQL": "#4479a1", "PostgreSQL": "#4169e1",
  "VS Code": "#23a8f2", "GitHub Copilot": "#a78bfa",
};

function TechnologyIcon({ name }) {
  const technology = technologyIcons[name];
  if (!technology) return name.slice(0, 2).toUpperCase();
  if (technology.type === "fa") return <FontAwesomeIcon icon={technology.icon} />;
  const Icon = technology.icon;
  return <Icon />;
}

const tickerSkills = [
  ["React.js", "REACT", "R"],
  ["Angular.js", "ANGULAR", "A"],
  ["HTML", "HTML5", "H5"],
  ["CSS", "CSS3", "C3"],
  ["JavaScript", "JAVASCRIPT", "JS"],
  ["Tailwind CSS", "TAILWIND", "TW"],
  ["Node.js", "NODE.JS", "N"],
  ["MongoDB", "MONGODB", "DB"],
  ["PostgreSQL", "POSTGRES", "PG"],
  ["GitHub", "GITHUB", "GH"],
  ["Postman", "POSTMAN", "PM"],
];

function Skills() {
  const skillGroups = [
    { number: "01", name: "Frontend", note: "Interfaces / interaction", skills: [["React.js", "85%"], ["Angular.js", "70%"], ["Tailwind CSS", "80%"], ["Bootstrap", "75%"]] },
    { number: "02", name: "Backend", note: "Data / architecture", skills: [["Node.js", "80%"], ["MongoDB", "75%"], ["MySQL", "70%"], ["PostgreSQL", "70%"]] },
    { number: "03", name: "Tools", note: "Workflow / delivery", skills: [["Git", "78%"], ["GitHub", "80%"], ["VS Code", "88%"], ["Postman", "68%"], ["GitHub Copilot", "76%"]] },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-heading skills-heading">
        <span className="section-kicker">02 / CAPABILITIES</span>
        <h2>Skills</h2>
        <span className="heading-line" aria-hidden="true" />
      </div>

      <div className="skills-intro">
        <p>Tools I use to shape ideas into useful, polished products.</p>
        <span>FULL-STACK / ALWAYS LEARNING</span>
      </div>

      <div className="skills-layout">
        <div className="skills-constellation" aria-label="Core technology stack">
          <div className="skills-orbit skills-orbit-outer" />
          <div className="skills-orbit skills-orbit-inner" />
          <div className="skills-core"><span>SK</span><small>STACK<br />CORE</small></div>
          <span className="stack-node stack-node-one">REACT</span>
          <span className="stack-node stack-node-two">NODE</span>
          <span className="stack-node stack-node-three">MONGO</span>
          <span className="stack-node stack-node-four">GIT</span>
          <span className="constellation-label">BUILDING WITH<br /><strong>INTENT</strong></span>
        </div>

        <div className="skills-cards">
          {skillGroups.map((group) => (
            <div className={`skills-card neon-card ${group.number === "01" ? "skills-card-featured" : ""}`} key={group.name}>
              <div className="skills-card-header">
                <span className="skills-index">{group.number}</span>
                <div><h3>{group.name}</h3><span>{group.note}</span></div>
              </div>
              <div className="skills-card-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="skill-list">
                {group.skills.map(([name, level]) => (
                  <div className="skill-item" key={name}>
                    <div className="skill-label">
                      <p><span className="skill-logo" style={{ color: technologyColors[name] }} aria-hidden="true"><TechnologyIcon name={name} /></span>{name}</p>
                      <span>{level}</span>
                    </div>
                    <div className="progress"><span style={{ width: level }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-ticker" aria-label="Frontend and backend technologies">
        <div className="skills-ticker-track">
          {[...tickerSkills, ...tickerSkills].map(([name, label], index) => (
            <span className="ticker-skill" key={`${name}-${index}`}>
              <span className="ticker-logo" style={{ color: technologyColors[name] }} aria-hidden="true">
                <TechnologyIcon name={name} />
              </span>
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
