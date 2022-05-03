import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer className='py-2' style={{ backgroundColor: 'grey', color: 'white' }}>
            <p className='mt-3 px-3 '><small>Copyright &copy; {getCurrentYear()} All Rights Reserved by <b>Sazzad Hossain</b> &trade; </small></p>
        </footer>
    );
};

export default Footer;