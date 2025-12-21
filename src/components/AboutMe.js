import React from "react";
import { Container } from "react-bootstrap";
import img from '../assets/images/jide-screenshot.jpg'

function AboutMe() {
  return (
    <Container className="about-container">
      <div className="about-hero">
        <div className="about-image-wrapper">
          <img src={img} alt="Jide Ogunbanjo" className="about-img"/>
        </div>
        <div className="about-intro">
          <h1 className="about-title">Full Stack Web Developer</h1>
          <p className="about-subtitle">Passionate about creating meaningful software applications</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">Education & Certification</h2>
          <p className="about-text">
            Certified Full Stack Engineer from the University of Texas at Austin coding bootcamp, 
            with a Bachelor of Science in Mechanical Engineering from the University of Texas at San Antonio. 
            Also a certified Scrum Master in Agile methodologies and project management.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3 className="expertise-title">Full Stack Development</h3>
              <p className="expertise-text">
                Proficient in modern web technologies including React, Next.js, TypeScript, Node.js, Express, 
                MongoDB, Prisma, Docker, HTML, CSS, and JavaScript. Experience building full-stack applications 
                including booking platforms and e-commerce solutions with containerization and type-safe development. 
                Passionate about approaching programming challenges from different angles 
                and collaborating with others to create meaningful software applications.
              </p>
            </div>
            <div className="expertise-item">
              <h3 className="expertise-title">Electronics & Automation</h3>
              <p className="expertise-text">
                Experience with Allen Bradley, Omron and Siemens PLCs, sensors, 
                servo-motors and various electro-mechanical devices. Strong background 
                in industrial automation and controls engineering.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Professional Strengths</h2>
          <p className="about-text">
            An effective communicator who keeps customers and management informed about 
            project progress while collaborating with vendors and contractors to meet 
            deadlines and deliverables. Strong problem-solving skills and a persevering 
            attitude have helped provide solutions to challenging engineering problems.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Community & Interests</h2>
          <p className="about-text">
            Passionate about soccer and community involvement. Volunteer on Saturday mornings 
            to coach children, helping them develop their skills, learn team play, and enjoy 
            the basics of soccer while socializing and having fun.
          </p>
        </section>

        <div className="about-footer">
          <p className="footer-text">
            I'm excited for the opportunity to apply my skills in a fast-paced, collaborative 
            environment with a quality-driven team to develop new ideas, technologies, and 
            products that achieve maximum customer satisfaction.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AboutMe;
