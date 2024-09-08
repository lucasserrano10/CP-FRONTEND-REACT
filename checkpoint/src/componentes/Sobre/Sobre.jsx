import React from "react";
import '../Sobre/Sobre.css'
import Container from 'react-bootstrap/Container';



const Sobre = () =>{
    return(
        <>
        <Container className="div-sobre p-1 my-5">
            <h1 className="fs-2 fw-bold text-shadow text-center main-color p-5">QUEM NÓS SOMOS ?</h1>
            <p className="fs-5 text-center main-color text-shadow fw-bolder p-3">Na nossa loja, acreditamos que a corrida é mais do que um esporte – é um estilo de vida. Somos apaixonados por oferecer produtos de qualidade que ajudam corredores de todos os níveis a atingirem seus objetivos com conforto e performance. Com uma seleção cuidadosamente escolhida de roupas e acessórios, estamos comprometidos em apoiar sua jornada nas pistas, trilhas e ruas. Corre com a gente!</p>
        </Container>
        </>
    )
}

export default Sobre