import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <Container className='py-3' id='services'>
                <h1 className='mt-5'>Services</h1>
                <div className='services-section mt-4'>
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Services;