import React from 'react';
import '../Nav/Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className='background-nav p-4'>
                <Navbar.Brand href="#logo" className='fs-2 fw-bold text-shadow text-white'>Power Run</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-2">
                    <Nav.Link href="#home" className='text-white text-shadow-itens fs-4 '>Home</Nav.Link>
                    <Nav.Link href="#sobre" className='text-white text-shadow-itens fs-4 '>Sobre</Nav.Link>
                    <Nav.Link href="#produtos" className='text-white text-shadow-itens fs-4 '>Produtos</Nav.Link>
                    <Nav.Link href="#contato" className='text-white text-shadow-itens fs-4 '>Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;