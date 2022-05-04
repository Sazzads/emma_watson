import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'
import notFoundimg from '../../images/notFound.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <div className='not-found-page'>
                    <div >
                        <h1 className='text-danger mt-5 fourZeroFour'>404</h1>
                        <h2>Page is Not Found!</h2>
                        <img src={notFoundimg} alt="" />
                        <p>The Page doesn't exist. Go back.</p>


                        <button className='rounded-pill px-5 fw-bolder fs-6 mb-5 bg-warning' onClick={() => navigate('/')}>Go Back</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;