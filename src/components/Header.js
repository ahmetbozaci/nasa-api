import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import nasa from './assets/nasa.png';

const Header = () => (
  <Navbar expand="sm" bg="dark" variant="dark" className="mb-4">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src={nasa}
          width="40"
          height="40"
          className="d-inline-block me-2"
          alt="Nasa Logo"
        />
        <span className="d-none d-sm-inline-block">Nasa Image Collection</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf"
            target="_blank"
          >
            About The NASA API
          </Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Container>
  </Navbar>
);

export default Header;
