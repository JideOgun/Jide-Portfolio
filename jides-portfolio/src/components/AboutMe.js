import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function AboutMe() {
  return (
    <Container>
    <Row>
    <Col>
    <Card className="aboutmecard">
    <Card.Title>
      Full Stack Web Developer with experience in coding and electronics.
    </Card.Title>
    <Card.Text>
       Certificate from the UT Austin coding bootcamp and a Mechanical
      Engineering degree from the University of Texas at San Antonio. Full stack
      technologies include HTML, CSS, JavaScript, Node.js, while electronics
      experience include Allen Bradley, Omron and Siemens PLC’s, sensors,
      servo-motors and all sorts of electro-mechanical devices. Also a certified
      Scrum Master in Agile methodologies, and project management. Passionate
      about approaching programming challenges from different angles and
      collaborating with others to create meaningful software applications.
    </Card.Text>
    <Card.Body>
      I’m an
      effective communicator which has been useful in keeping customers and
      management adequately informed about job site progress while collaborating
      with vendors and contractors to meet project deadlines and deliverables.
      My problem solving skills, and persevering attitude have helped me provide
      solutions to challenging engineering problems. I’m also passionate about
      soccer, and my community. Community involvements include volunteering on
      saturday mornings to coach children to develop their skills, team play,
      learn the basics of soccer, socializing and having fun. 
    </Card.Body>
    <Card.Footer>
      I’m excited for
      the opportunity to apply my skills in a fast paced, collaborative
      environment, with a quality driven team to develop new ideas, technologies
      and products that will achieve maximum customer satisfaction.
    </Card.Footer>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default AboutMe;
