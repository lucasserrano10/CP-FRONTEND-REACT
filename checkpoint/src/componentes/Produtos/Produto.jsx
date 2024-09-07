import React from 'react';
import '../Produtos/Produto.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

const Produto = () =>{
    return(
        <>
        <h1 className='fs-2 fw-bold text-shadow text-center main-color p-5'>Alguns de Nossos Produtos :</h1>

    <Container>    
        <Card className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Nike Air Zoom Alphafly Next%</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
        <Card className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Adidas Adizero Adios Pro 3</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
        <Card className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>ASICS Metaspeed Sky+</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
        <Card className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Saucony Endorphin Pro 3</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
        <Card className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Hoka One One Rocket X 2</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
        <Card className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>New Balance FuelCell RC Elite v2</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
    </Container>
        </>
    )
}


export default Produto