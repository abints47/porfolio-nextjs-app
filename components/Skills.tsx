"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap"];

export default function Skills() {
  return (
    <Container className="mt-5">
      <h2 className="fw-bold text-center mb-4">Skills</h2>
      <Row className="g-3 justify-content-center">
        {skills.map((skill) => (
          <Col key={skill} xs={6} md={3}>
            <Card className="text-center shadow-sm rounded-4 border-0 p-3">
              <Card.Body>
                <Card.Title className="fw-semibold mb-0">{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}