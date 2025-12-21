import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
function FilterTech(props) {
  const { techProj, filteredTech } = props;
  const technologies = [
    { name: "React", id: 1 },
    { name: "Next.js", id: 2 },
    { name: "TypeScript", id: 3 },
    { name: "Node.js", id: 4 },
    { name: "Prisma", id: 5 },
    { name: "Docker", id: 6 },
    { name: "Sequelize ORM", id: 7 },
    { name: "HTML", id: 8 },
    { name: "CSS", id: 9 },
    { name: "MySQL", id: 10 },
    { name: "JavaScript", id: 11 },
    { name: "jQuery", id: 12 },
    { name: "MongoDB", id: 13 },
    { name: "Express", id: 14 },
    { name: "GraphQL", id: 15 },
  ];

  const [checkbox, setCheckbox] = useState(true);

  const handleCheckbox = (e) => {
    setCheckbox(!checkbox);

    let newTech = techProj.filter((tech) => {
      return tech.technology.includes(e.target.name);
    });

    if (!e.target.checked) {
      newTech = techProj;
    }

    filteredTech(newTech);
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3>Full Stack Projects - Filter by Technology</h3>
        </Col>
      </Row>
      <Row>
        {technologies.map((tech) => {
          return (
            <Col xs={1} className="checkboxCol" key={tech.id}>
              <label htmlFor={tech.id} key={tech.id}>
                <span>
                  {tech.name}{" "}
                  <input
                    type="checkbox"
                    onClick={handleCheckbox}
                    data-id={tech.id}
                    name={tech.name}
                  ></input>
                </span>
              </label>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default FilterTech;
