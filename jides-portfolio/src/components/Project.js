import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import teksessImg from "../assets/images/teksessImg.jpg";
import mmImg from "../assets/images/homepage.JPG";
import wdImg from "../assets/images/weather-dashboard.JPG";
import cmsImg from "../assets/images/JidesCmsTechBlog.jpg";
import btImg from "../assets/images/budgetTracker.jpg";
import wdsImg from "../assets/images/workdayscheduler.gif";
import FilterTech from "./FilterTechnologies";

function Projects() {
  const [techProjects, setTechProjects] = useState([
    {
      name: "Teksess",
      id: 1,
      imgurl: teksessImg,
      technology: ['Node.js', "Javascript", "Sequelize ORM"],
      website: "https://teksess.herokuapp.com/",
      description:
        "Professional social media website that enables users to leave ratings and post/edit/delete reviews on tech Companies",
    },
    {
      name: "Music-And-Movies",
      id: 2,
      imgurl: mmImg,
      technology: ["Javascript", "HTML", "CSS", "RestAPI", "Git"],
      website: "https://jideogun.github.io/MusicAndMovies/index.html",
      description: "Web app displaying music and movie information",
    },
    {
      name: "Budget-Tracker",
      id: 3,
      imgurl: btImg,
      technology: ["Javascript", "Node.js"],
      website: "https://fathomless-ocean-98711.herokuapp.com/",
      description:
        "Progressive Web Application that enables users to post transactions even when there is no network connectivity",
    },
    {
      name: "Jides CMS Tech-Blog",
      id: 4,
      imgurl: cmsImg,
      technology: ["Javascript", "Heroku", "MySQL", "Sequelize ORM"],
      website: "https://peaceful-stream-28816.herokuapp.com/",
      description:
        "Content management Blog-Site where developers(users) can publish/edit/delete blog posts and comment on other developers(users) posts as well.",
    },
    {
      name: "Weather-Dashboard",
      id: 5,
      imgurl: wdImg,
      technology: ["Javascript", "jQuery", "HTML"],
      website: "https://jideogun.github.io/weather-dashboard/",
      description:
        "A web application showing the weather forecast for cities entered into the search bar. ",
    },
    {
      name: "Work-Day Scheduler",
      id: 6,
      imgurl: wdsImg,
      technology: ["Javascript", "HTML", "CSS"],
      website: "https://jideogun.github.io/work-day-scheduler/",
      description:
        "Progressive Web Application that enables users to post transactions even when there is no network connectivity",
    },
  ]);

  return (
    <div>
      <FilterTech
        techProj={techProjects}
        setTechProjects={(proj) => setTechProjects(proj)}
      />

      <Container>
        <Row>
          {techProjects.map((project) => {
            return (
              <Col key={project.id}>
                <Card className="projectCard">
                  <Card.Img
                    src={`${project.imgurl}`}
                    style={{ width: "100%", height: "60%" }}
                  />
                  <Card.Link
                    className="imgurl stretched-link"
                    href={`${project.website}`}
                  >
                    {project.name}
                  </Card.Link>
                  <Card.Text>{project.technology}</Card.Text>
                  <Card.Body className="description">
                    {project.description}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
