"use client";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image"


export default function AppNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        
        <Navbar.Brand as={Link} href="/">
        <Image src="/images.png" alt="logo" width={40} height={40} className="rounded" />   Abin T S</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ThemeToggle/>
    </Navbar>
    
  );
}