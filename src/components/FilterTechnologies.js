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
  const [checkedTechs, setCheckedTechs] = useState(new Set());

  const handleCheckbox = (e) => {
    setCheckbox(!checkbox);
    const techName = e.target.name;
    const newCheckedTechs = new Set(checkedTechs);
    
    if (e.target.checked) {
      newCheckedTechs.add(techName);
    } else {
      newCheckedTechs.delete(techName);
    }
    setCheckedTechs(newCheckedTechs);

    let newTech = techProj.filter((tech) => {
      return tech.technology.includes(techName);
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
            <Col xs={6} sm={4} md={3} lg={2} className="checkboxCol" key={tech.id}>
              <label 
                htmlFor={`tech-${tech.id}`} 
                className={`checkbox-label ${checkedTechs.has(tech.name) ? 'checked' : ''}`} 
                key={tech.id}
              >
                <input
                  type="checkbox"
                  id={`tech-${tech.id}`}
                  onClick={handleCheckbox}
                  data-id={tech.id}
                  name={tech.name}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{tech.name}</span>
              </label>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default FilterTech;
