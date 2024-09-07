import React from 'react';
import '../Home/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Home/ExampleCarouselImage';

import firstImage from '../../assets/img/first-image.jpg'
import secondImage from '../../assets/img/second-image.jpg'
import thirdImage from '../../assets/img/third-image.jpg'


const Home = () => {
    return (
        <div className='carrousel'>
        <Carousel>
            <Carousel.Item interval={1000}>
            <ExampleCarouselImage
            imageUrl={firstImage}  
            altText="First slide" />
            <Carousel.Caption>
                <h3>Pedale com potência</h3>
                <p>Descubra a liberdade em cada quilômetro sobre duas rodas.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <ExampleCarouselImage
            imageUrl={secondImage}
            altText="Second slide" />
            <Carousel.Caption>
                <h3>Construa sua força.</h3>
                <p>Equipamentos e acessórios que levam seu treino ao próximo nível. Prepare-se para resultados reais!</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ExampleCarouselImage 
            imageUrl= {thirdImage}
            text="Third slide" />
            <Carousel.Caption>
                <h3>Eleve seu jogo.</h3>
                <p>
                Domine a quadra com o máximo desempenho e estilo.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Home;