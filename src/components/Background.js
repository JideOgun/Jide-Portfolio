import React from "react";
import { Container } from "react-bootstrap";

function Background() {
  return (
    <Container className="background-container">
      <div className="background-header">
        <h1 className="background-title">Education & Skills</h1>
        <p className="background-subtitle">
          Comprehensive technical expertise across web development and
          engineering
        </p>
      </div>

      <div className="background-content">
        <section className="background-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-item">
              <h3 className="education-degree">
                Bachelor of Science in Mechanical Engineering
              </h3>
              <p className="education-school">
                University of Texas at San Antonio
              </p>
            </div>
            <div className="education-item">
              <h3 className="education-degree">
                Full Stack Engineering Certificate
              </h3>
              <p className="education-school">University of Texas at Austin</p>
            </div>
          </div>
        </section>

        <section className="background-section">
          <h2 className="section-title">Programming Languages</h2>
          <div className="skills-list">
            <span className="skill-tag">JSX</span>
            <span className="skill-tag">JavaScript (ES5/ES6)</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">jQuery</span>
            <span className="skill-tag">JSON</span>
            <span className="skill-tag">AJAX</span>
            <span className="skill-tag">XML</span>
          </div>
        </section>

        <section className="background-section">
          <h2 className="section-title">Front-End Technologies</h2>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">React Router</span>
            <span className="skill-tag">React Redux</span>
            <span className="skill-tag">React Hooks</span>
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">Bulma</span>
            <span className="skill-tag">Sass</span>
          </div>
        </section>

        <section className="background-section">
          <h2 className="section-title">Back-End Technologies</h2>
          <div className="skills-list">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">Prisma</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">RESTful API</span>
            <span className="skill-tag">Mongoose</span>
            <span className="skill-tag">Sequelize ORM</span>
            <span className="skill-tag">knexJS ORM</span>
            <span className="skill-tag">Handlebars.js</span>
            <span className="skill-tag">Axios</span>
          </div>
        </section>

        <section className="background-section">
          <h2 className="section-title">Testing & Deployment</h2>
          <div className="skills-list">
            <span className="skill-tag">Mocha</span>
            <span className="skill-tag">Chai</span>
            <span className="skill-tag">Jest</span>
            <span className="skill-tag">Amazon AWS</span>
            <span className="skill-tag">EC2</span>
            <span className="skill-tag">S3</span>
            <span className="skill-tag">RDS</span>
            <span className="skill-tag">Heroku</span>
            <span className="skill-tag">Azure</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">MERN Stack</span>
          </div>
        </section>

        <section className="background-section">
          <h2 className="section-title">Developer Tools</h2>
          <div className="skills-list">
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">NPM</span>
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">Babel</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Chrome DevTools</span>
            <span className="skill-tag">Agile Methodology</span>
            <span className="skill-tag">JIRA</span>
          </div>
        </section>

        <section className="background-section">
          <h2 className="section-title">Controls Engineering</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3 className="expertise-title">PLC Programming</h3>
              <p className="expertise-text">
                RsLogix 5000, Sysmac Studio, TIA-Portal
              </p>
            </div>
            <div className="expertise-item">
              <h3 className="expertise-title">Robotics & Automation</h3>
              <p className="expertise-text">
                Robot programming, HMI programming, SEW MoviTools, FANUC
                RoboGuide, SolidWorks
              </p>
            </div>
          </div>
          <p className="about-text" style={{ marginTop: "1.5rem" }}>
            My areas of expertise include Full-Stack
            Engineering/Web-Development, Robotics, PLC programming, Robot
            programming, HMI programming, and Industrial Automation.
          </p>
        </section>

        <div className="background-footer">
          <a
            className="download"
            href="https://docs.google.com/document/d/1Wg8pwZwkADiQoSUrJIAqi0_wzi0q7MkbefQ0HOxWNi0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Background;
