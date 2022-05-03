import React from 'react';
import img1 from '../../images/gallary/01.jpg'
import img2 from '../../images/gallary/02.jpg'
import img3 from '../../images/gallary/03.jpg'
import img4 from '../../images/gallary/04.jpg'
import img5 from '../../images/gallary/05.jpg'
import img6 from '../../images/gallary/06.jpg'
import img7 from '../../images/gallary/07.jpg'
import img8 from '../../images/gallary/08.jpg'
import img9 from '../../images/gallary/09.jpg'

import './Gallery.css'
import { Container } from 'react-bootstrap';

const Gallery = () => {
    return (
        <>
            <Container className='' id='gallery'>
                <h1 className='mb-3 pt-5'>Gallary</h1>
                <div className='gallery mb-5 mt-4' >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img7} alt="" />
                    <img src={img4} alt="" />
                    <img src={img8} alt="" />
                    <img src={img6} alt="" />
                    <img src={img3} alt="" />
                    <img src={img5} alt="" />
                    <img src={img9} alt="" />
                </div>
            </Container>
        </>
    );
};

export default Gallery;