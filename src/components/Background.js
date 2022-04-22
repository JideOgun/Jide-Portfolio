import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Background() {
  return (
    <Container className="backgroundContainer">
      <Row>
        <Col>
          <Card className="backgroundcard">
            <Card.Title>
              Bachelor of Science in Mechanical Engineering from the University
              of Texas at San Antonio.<br></br>
              Full Stack Engineering Certificate from University of Texas at
              Austin.
            </Card.Title>
            <Card.Text>
              My areas of expertise are Full-Stack Engineering/Web-Development,
              Robotics, PLC programming, Robot programming, HMI programming and
              Industrial Automation.
            </Card.Text>
            <Card.Body>
              Programming Languages: JSX, JavaScript (ES5/ES6), HTML5, CSS3,
              jQuery, JSON, AJAX, XML <br></br><br></br>
              Front-End Skills: ReactJS, React-Router, React-Redux, React-Hooks,
              Angular, BootStrap, Bulma, Sass <br></br><br></br>
              Back-End Skills:Node.js, Express, Axios, MySQL, MongoDB, Axios,
              RESTful API, GraphQL, Mongoose, knexJS ORM, Sequelize ORM,
              Handlebars.js<br></br><br></br>
              Testing/Deployment: Mocha, Chai, Amazon AWS (EC2/ S3/ RDS), Jest,
              Heroku, Azure, MERN <br></br><br></br>
              Developer Tools: GitHub, NPM, Webpack, Babel, Postman, Chrome
              DevTools, Agile Methodology, JIRA <br></br><br></br>
              Controls Engineering Skills: RsLogix 5000, Sysmac Studio, TIA-Portal,
              SolidWorks, , SEW MoviTools, FANUC RoboGuide.
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
      </Row>
      <div>
        <button className="download">
          <a
            className="download"
            href="https://drive.google.com/file/d/124GifpH4IHq31UbhntGFkm5VRbB24UyO/view?usp=sharing"
            download
          >
            Download Resume
          </a>
        </button>
      </div>
    </Container>
  );
}

export default Background;
