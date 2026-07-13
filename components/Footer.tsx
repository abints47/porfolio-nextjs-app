
    "use client";

import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark mt-5 py-4">
      <Container className="text-center">
        <div className="d-flex justify-content-center gap-4 mb-3 fs-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:you@example.com" className="text-white">
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Abin. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}