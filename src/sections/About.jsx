import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-wrapper">
        {/* LEFT CONTENT */}
        <div className="about-text neon-card">
          <h3>Who I Am</h3>

          <p>
            I’m <span className="highlight">S.M. Kashan</span>, an aspiring
            <span className="highlight"> Full-Stack Developer</span> with a
            strong focus on clean UI and modern web solutions.
          </p>

          <p>
            I am currently gaining experience through learning, practice,
            and personal projects while building a solid development foundation.
          </p>

          <p>
            I completed my <span className="highlight">Matriculation</span> from
            <span className="highlight"> The Smart School, Karachi</span> under
            the <span className="highlight">Board of Secondary Education</span> in 2025.
          </p>

          <p>
            I also earned an <span className="highlight">ADSE</span>
            (Advance Diploma in Software Engineering) from
            <span className="highlight"> Aptech</span> in 2025.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="about-stats">
          <div className="about-stat neon-card">
            <h4>Experience</h4>
            <span>Learning Phase</span>
          </div>

          <div className="about-stat neon-card">
            <h4>Projects</h4>
            <span>15+</span>
          </div>

          <div className="about-stat neon-card">
            <h4>Tech Stack</h4>
            <span>MERN</span>
          </div>

          <div className="about-stat neon-card">
            <h4>Focus</h4>
            <span>UI & Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
