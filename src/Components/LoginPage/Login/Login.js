import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../Authentication/SocialLogin';
import Loading from '../../Loading/Loading';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigateRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true })
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Incorrect username or password.</p>
    }




    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address.')
        }
    }
    if (loading || sending) {
        return <Loading />
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-5 text-primary'> Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{errorElement}</p>
                <Button className='rounded-pill px-5 fw-bolder fs-6' variant="primary" type="submit">
                    <FontAwesomeIcon style={{ height: '16px' }} className='me-2 ' icon={faUserAlt} />
                    Login
                </Button>
            </Form>
            <p className='mt-3'>Are You New User?<span> <Link className='text-decoration-none' to='/register'>Sign Up</Link> </span></p>
            <ToastContainer />
            <p>Forget Your Password? <span style={{ cursor: 'pointer' }} className='text-primary' onClick={resetPassword}>Reset Password</span></p>

            <SocialLogin></SocialLogin>
            <br />
        </div >
    );
};

export default Login;