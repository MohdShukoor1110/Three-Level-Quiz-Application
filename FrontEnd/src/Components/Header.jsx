import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header()  {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">🧠 Multi-Level Quiz App</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;