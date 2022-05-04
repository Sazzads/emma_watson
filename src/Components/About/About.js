import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import image from '../../images/aboutpic.png'

const About = () => {
    return (
        <Container className='about-section pt-lg-5 pt-md-5 mt-lg-4 pt-4 '>
            <div>
                <Row>
                    <Col lg='6' md='6'>
                        <div>
                            <img className='w-75' src={image} alt="" />
                        </div>
                    </Col>
                    <Col lg='6' md='6' className='d-flex align-items-center mt-3 mt-lg-0'>
                        <div className='text-start'>
                            <h1 className='text-info'>SAZZAD HOSSAIN</h1>
                            <h3 className='text-secondary'>junior web developer</h3>
                            <p className='text-dark'>This is Sazzad Hossain from Dafodil international University. i am a student of computer science and engineering. my goal is want to be a full stack web developer. so i need to be hard work next 3/4 month</p>

                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default About 