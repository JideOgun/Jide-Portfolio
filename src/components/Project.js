import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import teksessImg from "../assets/images/teksessImg.jpg";
import mmImg from "../assets/images/homepage.JPG";
import wdImg from "../assets/images/weather-dashboard.JPG";
import cmsImg from "../assets/images/JidesCmsTechBlog.jpg";
import btImg from "../assets/images/budgetTracker.jpg";
import wdsImg from "../assets/images/workdayscheduler.gif";
import hawker from "../assets/images/hawkerHomepage.jpg";
import FilterTech from "./FilterTechnologies";

function Projects() {
  const [techProjects, setTechProjects] = useState([
    {
      name: "Hawker",
      id: 1,
      imgurl: hawker,
      technology: [
        "Javascript",
        "HTML",
        "CSS",
        "GraphQL",
        "MongoDB",
        "Express",
      ],
      website: "https://texas-hawker.herokuapp.com/",
      description:
        "E-commerce website for that allows users to post items to sell and buy",
      githubRepo: "https://github.com/JideOgun/Hawker",
    },
    {
      name: "Teksess",
      id: 2,
      imgurl: teksessImg,
      technology: [
        "Node.js",
        "Javascript",
        "Sequelize ORM",
        "MySQL",
        "Express",
      ],
      website: "https://teksess.herokuapp.com/",
      description:
        "Professional social media website that enables users to leave ratings and post/edit/delete reviews on tech Companies",
      githubRepo: "https://github.com/JideOgun/Assess",
    },
    {
      name: "Music-And-Movies",
      id: 3,
      imgurl: mmImg,
      technology: ["Javascript", "HTML", "CSS", "RestAPI", "GitHub"],
      website: "https://jideogun.github.io/MusicAndMovies/index.html",
      description: "Web app displaying music and movie information",
      githubRepo: "https://github.com/JideOgun/MusicAndMovies",
    },
    {
      name: "Budget-Tracker",
      id: 4,
      imgurl: btImg,
      technology: ["Javascript", "Node.js", "MongoDB", "Express"],
      website: "https://fathomless-ocean-98711.herokuapp.com/",
      description:
        "Progressive Web Application that enables users to post transactions even when there is no network connectivity",
      githubRepo: "",
    },
    {
      name: "Jides CMS Tech-Blog",
      id: 5,
      imgurl: cmsImg,
      technology: ["Javascript", "Heroku", "MySQL", "Sequelize ORM", "Express"],
      website: "https://peaceful-stream-28816.herokuapp.com/",
      description:
        "Content management Blog-Site where developers(users) can publish/edit/delete blog posts and comment on other developers(users) posts as well.",
      githubRepo: "https://github.com/JideOgun/Jides-CMS-Style-Blog-Site",
    },
    {
      name: "Weather-Dashboard",
      id: 6,
      imgurl: wdImg,
      technology: ["Javascript", "jQuery", "HTML"],
      website: "https://jideogun.github.io/weather-dashboard/",
      description:
        "A web application showing the weather forecast for cities entered into the search bar. ",
      githubRepo: "https://github.com/JideOgun/weather-dashboard",
    },
    {
      name: "Work-Day Scheduler",
      id: 7,
      imgurl: wdsImg,
      technology: ["Javascript", "HTML", "CSS"],
      website: "https://jideogun.github.io/work-day-scheduler/",
      description:
        "Work day scheduler that uses different colors to communicate past, present and future events to the user.",
      githubRepo: "https://github.com/JideOgun/work-day-scheduler",
    },
  ]);

  const [allTech, filteredTech] = useState([]);

  const renderCard = () => {
    if (allTech.length === 0) {
      return techProjects.map((project) => {
        return (
          <Col key={project.id}>
            <Card className="projectCard">
              <Card.Img
                src={`${project.imgurl}`}
                style={{ width: "100%", height: "60%" }}
              />
              <a id="linkText" className="imgurl" href={`${project.website}`}>
                Click to see {project.name}
              </a>
              <Card.Text>{`${project.technology}`}</Card.Text>
              <Card.Text className="githubRepo">
                <a className="githubRepo" href={project.githubRepo}>
                  Github Repo
                </a>
              </Card.Text>
              <Card.Body className="description">
                {project.description}
              </Card.Body>
            </Card>
          </Col>
        );
      });
    } else {
      return allTech.map((project) => {
        return (
          <Col key={project.id}>
            <Card className="projectCard">
              <Card.Img
                src={`${project.imgurl}`}
                style={{ width: "100%", height: "60%" }}
              />
              <a id="linkText" className="imgurl" href={`${project.website}`}>
                {project.name}
              </a>
              <Card.Text>{project.technology}</Card.Text>
              <Card.Text className="githubRepo">
                <a className="githubRepo" href={project.githubRepo}>
                  Click to view Github Repo
                </a>
              </Card.Text>
              <Card.Body className="description">
                {project.description}
              </Card.Body>
            </Card>
          </Col>
        );
      });
    }
  };

  return (
    <div>
      <FilterTech
        techProj={techProjects}
        setTechProjects={(proj) => setTechProjects(proj)}
        allTech={allTech}
        filteredTech={filteredTech}
      />

      <Container>
        <Row>{renderCard()}</Row>
      </Container>
    </div>
  );
}

export default Projects;
