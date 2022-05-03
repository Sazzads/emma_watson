import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <div className='not-found-page'>
                    <div>
                        <h1>404</h1>
                        <h2>Page Not Found!</h2>
                        <p>The Page you are looking for doesn't exist or an other occurred, Go back.</p>
                        <button onClick={() => navigate('/')}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;