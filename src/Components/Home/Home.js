import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

import HomePage from './Home/HomePage';

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>

            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;