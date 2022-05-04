import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar className='shadow-sm py-2' collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h1 className=' zoom' >EMMA WATSON</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ fontSize: '18px', color: 'white' }} className="ms-auto">
                            <Nav.Link className="nav-class " href="/#services">Services</Nav.Link>
                            <Nav.Link className="nav-class " href="/#gallery">Gallery</Nav.Link>
                            <Nav.Link className="nav-class " as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link className="nav-class " as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link className="nav-class " onClick={handleSignOut}>
                                        Log Out

                                    </Nav.Link>
                                    :
                                    <Nav.Link className="nav-class " as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                        <span><small className='border border-secondary text-danger font-weight-light zoom'>{user?.displayName && user.displayName}</small></span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;