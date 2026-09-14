import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading about-heading">
        <span className="section-kicker">01 / PROFILE</span>
        <h2>About Me</h2>
        <span className="heading-line" aria-hidden="true" />
      </div>

      <div className="about-wrapper">
        {/* LEFT CONTENT */}
        <div className="about-text neon-card">
          <div className="about-panel-topline">
            <span className="status-dot" />
            <span>Available for creative builds</span>
            <span className="panel-code">SK_01</span>
          </div>

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

          <div className="about-signature" aria-hidden="true">
            <span>CURIOUS BY DEFAULT</span>
            <span className="signature-line" />
            <span>BUILD / LEARN / REFINE</span>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="about-stats">
          <div className="about-stat neon-card">
            <span className="stat-index">01</span>
            <h4>Experience</h4>
            <span>Learning Phase</span>
            <span className="stat-meter"><i /></span>
          </div>

          <div className="about-stat neon-card">
            <span className="stat-index">02</span>
            <h4>Projects</h4>
            <span>15+</span>
            <span className="stat-meter"><i /></span>
          </div>

          <div className="about-stat neon-card">
            <span className="stat-index">03</span>
            <h4>Tech Stack</h4>
            <span>MERN</span>
            <span className="stat-meter"><i /></span>
          </div>

          <div className="about-stat neon-card">
            <span className="stat-index">04</span>
            <h4>Focus</h4>
            <span>UI & Performance</span>
            <span className="stat-meter"><i /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
