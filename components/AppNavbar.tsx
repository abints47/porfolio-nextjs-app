"use client";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="py-2">
      <Container className="d-flex align-items-center justify-content-between">
        
        {/* Logo & Brand Name */}
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2 m-0">
          <Image 
            src="/images.png" 
            alt="logo" 
            width={40} 
            height={40} 
            className="rounded" 
          />
          <span>Abin T S</span>
        </Navbar.Brand>

        {/* Right side controls: Hamburger menu + Theme toggle pushed to the right */}
        <div className="d-flex align-items-center gap-2">
          <Navbar.Toggle aria-controls="main-navbar" />
          
          {/* Added 'ms-3' (margin-start) to shift ThemeToggle to the right */}
          <div className="ms-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Collapsible Navigation Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-center text-lg-start pt-3 pt-lg-0">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}