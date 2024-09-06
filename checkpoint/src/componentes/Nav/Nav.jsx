import React from 'react';
import '../Nav/Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#logo">Power Run</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-5">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#produtos">Produtos</Nav.Link>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Menu;