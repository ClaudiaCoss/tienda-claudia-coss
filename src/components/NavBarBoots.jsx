import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';
import { NavLink } from 'react-router-dom';

function NavBarBoots() {
  console.log('navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Dulces Mexicanos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/productos'>Productos</Nav.Link>
            <Nav.Link as={NavLink} to='/nosotros'>Nosotros</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categorias/DulcesMexicanos'>Dulces Mexicanos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categorias/DulcesNavidenios'>Dulces Navideños</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/contacto'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetIcons />
      </Container>
    </Navbar>
  );
}

export default NavBarBoots