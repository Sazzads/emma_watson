import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../Authentication/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const navigateLogin = () => {
        navigate('/login')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        await createUserWithEmailAndPassword(email, password);
        navigate('/')
    }
    if (loading) {
        return <Loading />
    }

    return (
        <div className='register-form container py-5'>
            <h2>Please Register</h2>
            <Row>
                <Col lg='3'></Col>
                <Col lg='6'>
                    <div className=' border mt-4'>
                        <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" autoComplete='on' required />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                                <Form.Check className='me-2' onClick={() => setAgree(!agree)} name='terms' id='terms' type="checkbox" />
                                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Terms and Conditions </label>
                            </Form.Group>
                            <Button
                                disabled={!agree}
                                className='rounded-pill w-50 max-auto px-5 fw-bolder fs-6' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                        <p>Already have an account? <span className='text-primary' onClick={navigateLogin} style={{ cursor: 'pointer' }}>Login Now</span></p>
                        <SocialLogin />
                    </div>
                </Col>
                <Col lg='3'></Col>
            </Row>

        </div>
    );
};

export default Register;