import react from 'react';
import alduLogoNoBg from '../../assets/logo/logo_aldu-removebg.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'



interface NavBarProps {
}

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <Navbar bg="light" expand="md" sticky="top" variant='light' >
      <Container fluid>
        <Navbar.Brand href="#home" className=''>
            <img src={alduLogoNoBg} alt="Aldu Logo" width="150" height="50" className="d-inline-block align-top" />
        </Navbar.Brand>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={icon({name: 'ellipsis-v', style: 'solid'})} />
        </button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#AboutUs">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavBar;
