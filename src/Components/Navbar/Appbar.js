import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import whoopie from './Img/whoopie.png'
import CartIcon  from './CartIcon'

const Appbar = () => {
  return (
  <>
      <Navbar  className='Appbar'bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
        <img className='logo' src={whoopie} alt=""/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link id="Appbar-item" href="/category/desserts">Desserts</Nav.Link>
        <Nav.Link id="Appbar-item" href="/category/drinks">Drinks</Nav.Link>
        <NavDropdown id="Appbar-item" title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
          <NavDropdown.Item href="stores">Stores</NavDropdown.Item>
          <NavDropdown.Item href="careers">Careers</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartIcon />
  </Container>
</Navbar>
  </>
  )
}

export default Appbar