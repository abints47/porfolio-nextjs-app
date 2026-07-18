// app/about/AboutPageContent.tsx
"use client"; // Required for react-bootstrap components

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function AboutPageContent() {
  return (
    <Container className="mt-5">
      {/* Cover image banner */}
      <div className="mb-4 rounded-4 overflow-hidden">
        <Image
          src="/forest.jpg"
          alt="About cover"
          width={1200}
          height={400}
          className="w-100"
          style={{ objectFit: "cover", maxHeight: "300px" }}
          priority // Added priority since this is a top-of-page banner image
        />
      </div>

      <h1 className="fw-bold mb-4 text-center">About Me</h1>

      {/* Profile photo + intro section */}
      <Row className="align-items-center justify-content-center mb-5">
        <Col xs={12} md={4} lg={3} className="text-center mb-3 mb-md-0">
          <Image
            src="/photo.jpg"
            alt="Abin"
            width={200}
            height={200}
            className="rounded-3xl shadow"
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={6} lg={5}>
          <p className="fs-5 mb-0 text-center text-md-start">
            Hi, I'm Abin, a frontend developer who enjoys building clean,
            responsive interfaces with React and Next.js. I'm currently
            focused on strengthening my skills in modern web development,
            one project at a time.
          </p>
        </Col>
      </Row>

      {/* Body content section */}
      <Row className="justify-content-center">
        {/* Changed md={10} to md={8} so text doesn't stretch too wide on desktop */}
        <Col md={8} lg={7}>
          <h2 className="fw-semibold mb-3">My Journey</h2>
          <p className="mb-4 text-muted" style={{ lineHeight: "1.7" }}>
            I started learning web development by building small static
            pages, and gradually moved into React and then Next.js as I
            wanted more structure and better performance out of the box.
          </p>

          <h2 className="fw-semibold mb-3 mt-4">What I'm Learning Now</h2>
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            I am currently learning how to build a portfolio website by mastering the essential first steps of web configuration in Next.js. 
            Specifically, I am discovering how to customize your site's browser title, which is crucial for making a strong first impression when
            potential clients or employers visit your digital portfolio.
          </p>
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            I am exploring how to set a global title for your homepage and unique titles for individual sections like your about page or project showcase.
            By learning how to implement this using either the modern App Router metadata object or the older Pages Router Head component, 
            I am building the foundation needed to make your portfolio look professional, stand out in browser tabs. 
          </p>
        </Col>
      </Row>
    </Container>
  );
}