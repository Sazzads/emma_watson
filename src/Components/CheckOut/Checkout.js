import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Checkout.css'

const Checkout = () => {
    const [loading] = useAuthState(auth);

    if (loading) {
        <Loading />
    }
    const handleSubmit = event => {
        event.preventDefault();
        toast('Thanks for confirm booking!');
    }
    return (
        <div className='checkout container py-5'>
            <h2>Booking Information</h2>
            <Row>
                <Col lg='3'></Col>
                <Col lg='6'>
                    <div className=' border mt-4'>
                        <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control className='py-2' type="text" name='name' placeholder="Full Name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='py-2' type="email" name='email' placeholder="email address" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='py-2' type="number" name='email' placeholder="phone number" required />


                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='py-2' type="text" name='password' placeholder="Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='py-2' type="text" name='password' placeholder="Additional info" />
                            </Form.Group>
                            <Button
                                style={{ fontSize: '18px' }} className='w-50 mx-auto py-2' variant="primary" type="submit">
                                Confirm Booking
                            </Button>
                        </Form>
                        <ToastContainer />
                    </div>
                </Col>
                <Col lg='3'></Col>
            </Row>

        </div>
    );
};

export default Checkout;