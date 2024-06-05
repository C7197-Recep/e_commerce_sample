import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* Menü aktif için. NavLink olmazsa bütün site baştan render edilir. */
import { NavLink } from 'react-router-dom';

function Header() {
  
  const [activeLink, setActiveLink] = useState("home");

  /* Bootstrap kullanmadan menü aktif kodu */
  // const page = window.location.pathname;

  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/">ECW</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
                
        {/* Bootstraple menü aktif kodu */}
        <Nav className="mr-auto" activeKey={activeLink} onSelect={(selectedKey) => setActiveLink(selectedKey)}>
          <Nav.Link as={NavLink} to="/" exact eventKey="home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" eventKey="about">About</Nav.Link>
          <Nav.Link  as={NavLink} to="/customers" eventKey="customers">Customers</Nav.Link>
          <Nav.Link  as={NavLink} to="/register" eventKey="register">Register</Nav.Link>
        </Nav>

        {/* Bootstrap kullanmadan menü aktif kodu */}
        {/* <Nav className="mr-auto">
          <Nav.Link href="/" className={ page === "/" ? "menu-active" : "menu-passive"}>Home</Nav.Link>
          <Nav.Link href="/customers" className={ page === "/customers" ? "menu-active" : "menu-passive"}>Customers</Nav.Link>
          <Nav.Link href="/register" className={ page === "/register" ? "menu-active" : "menu-passive"}>Register</Nav.Link>
        </Nav> */}

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;