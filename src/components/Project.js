import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import teksessImg from "../assets/images/teksessImg.jpg";
import mmImg from "../assets/images/homepage.JPG";
import wdImg from "../assets/images/weather-dashboard.JPG";
import cmsImg from "../assets/images/JidesCmsTechBlog.jpg";
import btImg from "../assets/images/budgetTracker.jpg";
import wdsImg from "../assets/images/workdayscheduler.gif";
import hawker from "../assets/images/hawkerHomepage.jpg";
import prodjImg from "../assets/images/prodj-homepage.png";
import FilterTech from "./FilterTechnologies";

function Projects() {
  const [techProjects, setTechProjects] = useState([
    {
      name: "Pro-DJ",
      id: 1,
      imgurl: prodjImg,
      technology: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "Prisma",
        "MongoDB",
        "Docker",
        "Express",
      ],
      website: "https://www.bookprodj.com/",
      description:
        "Multi-DJ Booking Platform that allows users to find and book professional DJs for events. Features multiple genres, easy booking process with instant confirmation, and secure payment processing.",
      GitHubRepo: "#", // TODO: Add GitHub repository URL if available
    },
    {
      name: "Hawker",
      id: 2,
      imgurl: hawker,
      technology: [
        "JavaScript",
        "HTML",
        "CSS",
        "GraphQL",
        "MongoDB",
        "Express",
      ],
      website: "https://texas-hawker.herokuapp.com/",
      description:
        "E-commerce website that allows users to post items to sell and buy using Stripe as a payment method.",
      GitHubRepo: "https://GitHub.com/JideOgun/Hawker",
    },
    {
      name: "Teksess",
      id: 3,
      imgurl: teksessImg,
      technology: [
        "Node.js",
        "JavaScript",
        "Sequelize ORM",
        "MySQL",
        "Express",
      ],
      website: "https://teksess.herokuapp.com/",
      description:
        "Professional social media website that enables users to leave ratings and post/edit/delete reviews on tech Companies",
      GitHubRepo: "https://GitHub.com/JideOgun/Assess",
    },
    {
      name: "Music-And-Movies",
      id: 4,
      imgurl: mmImg,
      technology: ["JavaScript", "HTML", "CSS", "RestAPI", "GitHub"],
      website: "https://jideogun.GitHub.io/MusicAndMovies/index.html",
      description: "Web app displaying music and movie information",
      GitHubRepo: "https://GitHub.com/JideOgun/MusicAndMovies",
    },
    {
      name: "Budget-Tracker",
      id: 5,
      imgurl: btImg,
      technology: ["JavaScript", "Node.js", "MongoDB", "Express"],
      website: "https://fathomless-ocean-98711.herokuapp.com/",
      description:
        "Progressive Web Application that enables users to post transactions even when there is no network connectivity",
      GitHubRepo: "https://GitHub.com/JideOgun/Jides-PWA-Budget-Tracker",
    },
    {
      name: "Jides CMS Tech-Blog",
      id: 6,
      imgurl: cmsImg,
      technology: ["JavaScript", "Heroku", "MySQL", "Sequelize ORM", "Express"],
      website: "https://peaceful-stream-28816.herokuapp.com/",
      description:
        "Content management Blog-Site where developers(users) can publish/edit/delete blog posts and comment on other developers(users) posts as well.",
      GitHubRepo: "https://GitHub.com/JideOgun/Jides-CMS-Style-Blog-Site",
    },
    {
      name: "Weather-Dashboard",
      id: 7,
      imgurl: wdImg,
      technology: ["JavaScript", "jQuery", "HTML"],
      website: "https://jideogun.GitHub.io/weather-dashboard/",
      description:
        "A web application showing the weather forecast for cities entered into the search bar. ",
      GitHubRepo: "https://GitHub.com/JideOgun/weather-dashboard",
    },
    {
      name: "Work-Day Scheduler",
      id: 8,
      imgurl: wdsImg,
      technology: ["JavaScript", "HTML", "CSS"],
      website: "https://jideogun.GitHub.io/work-day-scheduler/",
      description:
        "Work day scheduler that uses different colors to communicate past, present and future events to the user.",
      GitHubRepo: "https://GitHub.com/JideOgun/work-day-scheduler",
    },
  ]);

  const [allTech, setFilteredTech] = useState([]);

  const renderCard = () => {
    if (allTech.length === 0) {
      return techProjects.map((project) => {
        return (
          <Col key={project.id}>
            <Card className="projectCard">
              <Card.Img src={`${project.imgurl}`} />
              <div className="cardText">
                <a id="linkText" className="imgurl" href={`${project.website}`}>
                  Click to see {project.name}
                </a>
                <div className="technologies">
                  {project.technology.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <Card.Text className="GitHubRepo">
                  <a className="GitHubRepo" href={project.GitHubRepo}>
                    GitHub Repo
                  </a>
                </Card.Text>
                <Card.Body className="description">
                  {project.description}
                </Card.Body>
              </div>
            </Card>
          </Col>
        );
      });
    } else {
      return allTech.map((project) => {
        return (
          <Col key={project.id}>
            <Card className="projectCard">
              <Card.Img src={`${project.imgurl}`} />
              <a id="linkText" className="imgurl" href={`${project.website}`}>
                {project.name}
              </a>
              <div className="cardText">
                <div className="technologies">
                  {project.technology.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <Card.Text className="GitHubRepo">
                  <a className="GitHubRepo" href={project.GitHubRepo}>
                    Click to view GitHub Repo
                  </a>
                </Card.Text>
                <Card.Body className="description">
                  {project.description}
                </Card.Body>
              </div>
            </Card>
          </Col>
        );
      });
    }
  };

  return (
    <div className="wrapper">
      <FilterTech
        techProj={techProjects}
        setTechProjects={(proj) => setTechProjects(proj)}
        allTech={allTech}
        filteredTech={setFilteredTech}
      />

      <Container>
        <Row>{renderCard()}</Row>
      </Container>
    </div>
  );
}

export default Projects;
