import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import googleLogo from '../../../images/google.png'
import githubLogo from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading />
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }

    return (
        <div >
            <div className='d-flex justify-content-center align-items-center '>
                <div style={{ height: '1px' }} className="bg-primary w-50 me-2"></div>
                <div>or</div>
                <div style={{ height: '1px' }} className="bg-primary w-50 ms-2"></div>
            </div>
            <div className=' text-center'>
                <p className='text-danger'>{errorElement}</p>
                <button onClick={() => signInWithGoogle()} className='border-0 w-75 p-1 rounded-pill'> <img style={{ height: '30px' }}
                    src={googleLogo} alt="" /> <span className='fw-bolder text-primary'>Google Sign In</span> </button>
                <button onClick={() => signInWithGithub()} className='border-0 w-75 p-1 rounded-pill mt-3'> <img style={{ height: '30px' }}
                    src={githubLogo} alt="" /> <span className='fw-bolder text-primary'>Github Sign In</span> </button>

            </div>
        </div>
    );
};




export default SocialLogin;