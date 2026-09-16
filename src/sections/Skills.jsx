import React from "react";

function Skills() {
  const skillGroups = [
    { number: "01", name: "Frontend", note: "Interfaces / interaction", skills: [["React.js", "85%"], ["Angular.js", "70%"], ["Tailwind CSS", "80%"], ["Bootstrap", "75%"], ["HTML", "90%"]] },
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
                    <div className="skill-label"><p>{name}</p><span>{level}</span></div>
                    <div className="progress"><span style={{ width: level }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
