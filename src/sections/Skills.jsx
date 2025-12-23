import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-cards">
        {/* Frontend */}
        <div className="skills-card neon-card ">
          <h3>Frontend</h3>
          <p>React.js</p>
          <div className="progress"><span style={{ width: "85%" }} /></div>
          <p>Angular.js</p>
          <div className="progress"><span style={{ width: "70%" }} /></div>
          <p>Tailwind CSS</p>
          <div className="progress"><span style={{ width: "80%" }} /></div>
          <p>Bootstrap</p>
          <div className="progress"><span style={{ width: "75%" }} /></div>
          <p>HTML</p>
          <div className="progress"><span style={{ width: "90%" }} /></div>
        </div>

        {/* Backend */}
        <div className="skills-card neon-card">
          <h3>Backend</h3>
          <p>Node.js</p>
          <div className="progress"><span style={{ width: "80%" }} /></div>
          <p>MongoDB</p>
          <div className="progress"><span style={{ width: "75%" }} /></div>
          <p>MySQL</p>
          <div className="progress"><span style={{ width: "70%" }} /></div>
          <p>PostGre SQL</p>
          <div className="progress"><span style={{ width: "70%" }} /></div>
        </div>

        {/* Tools */}
        <div className="skills-card neon-card">
          <h3>Tools</h3>
          <p>GitHub</p>
          <div className="progress"><span style={{ width: "80%" }} /></div>
          <p>Git</p>
          <div className="progress"><span style={{ width: "75%" }} /></div>
          <p>Black Box AI</p>
          <div className="progress"><span style={{ width: "70%" }} /></div>
          <p>VS Code</p>
          <div className="progress"><span style={{ width: "85%" }} /></div>
          <p>GitHub Copilot</p>
          <div className="progress"><span style={{ width: "70%" }} /></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
