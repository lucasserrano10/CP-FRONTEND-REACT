import React from "react";
import '../Footer/Footer.css'
import { Container } from "react-bootstrap";

const Footer = () =>{
    return(
        <>
        <Container fluid className="div-footer p-3 mb-0 mt-5">
            <h1 className="fs-2 fw-bold text-shadow text-center text-white p-3">Power Run</h1>
            <p className="fonte fw-bold text-shadow text-center text-white p-1">Projetos sem fins financeiros | Desenvolvido por Lucas Serrano</p>
        </Container>
        </>
    )
}

export default Footer