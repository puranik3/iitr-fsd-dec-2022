import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand to="/home" as={NavLink}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/libraries" as={NavLink}>Libraries</Nav.Link>
                        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
