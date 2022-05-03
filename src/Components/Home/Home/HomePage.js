import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import slider1 from '../../../images/slider/slide01.jpg'
import slider2 from '../../../images/slider/slide02.jpg'
import slider3 from '../../../images/slider/slide03.jpg'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <Container className='home-container'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-warning'>Emma Charlotte Duerre Watson</h3>
                            <p >English actress and activist. Known for her roles in both blockbusters and independent films,</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-warning'>Emma Charlotte Duerre Watson</h3>
                            <p >English actress and activist. Known for her roles in both blockbusters and independent films,</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-warning'>Emma Charlotte Duerre Watson</h3>
                            <p >English actress and activist. Known for her roles in both blockbusters and independent films,</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default HomePage;