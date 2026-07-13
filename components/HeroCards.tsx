"use client";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function HeroCards() {
  return (
    <Container className="mt-5">
      <Row className="g-4 justify-content-center">
        
        <Container className="mt-5">
         <Row className="g-4 justify-content-center">
             <Col xs={12} md={4}>
                <Card bg="primary" text="white" className="h-100 text-center shadow rounded-4 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="fw-bold">Frontend Development</Card.Title>
                 <Card.Text>
                     Building responsive, accessible UIs with React and Next.js.
                 </Card.Text>
                </Card.Body>
                </Card>
             </Col>
         </Row>
    </Container>

        
        <Col xs={12} md={4}>
          <Card className="h-100 text-center shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="fw-bold">2+ Years Experience</Card.Title>
              <Card.Text>
                Hands-on with modern JavaScript frameworks and tooling.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 text-center shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="fw-bold">Let's Connect</Card.Title>
              <Card.Text>
                Open to freelance work and new opportunities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}