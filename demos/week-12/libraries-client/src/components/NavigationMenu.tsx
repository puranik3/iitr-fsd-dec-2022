import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationMenu = () => {
    return (
        <nav>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/libraries">List of libraries</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavigationMenu;
