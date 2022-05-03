
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <div className='service-section'>
            <img src={img} alt="" />
            <div className="">
                <h3>{name}</h3>
                <h4><b>Price:</b> {price}</h4>
                <p>{description}</p>

                <Link to="/checkout">
                    <Button className='btn btn-primary ' >Book Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;