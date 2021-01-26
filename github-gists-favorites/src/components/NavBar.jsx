import React from "react"
import { Link } from "react-router-dom"

import { Navbar, Nav } from "react-bootstrap"

export default function NavBar() {
  return (
    <Navbar sticky="top" variant="light" bg="info" expand="lg">
      <Nav>
        <Nav.Link className="text-white" as={Link} to="/">
          Search Users
        </Nav.Link>
        <Nav.Link className="text-white" as={Link} to="/favorites">
          View Favorites
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}