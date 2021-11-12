import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    //const { user, logOUt } = useFirebase();
    const { user, logOUt } = useAuth();
    return (
        <div className='header-bg'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="d-flex">
                            <div className="header-logo">
                                <img src={logo} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <Link to="/home" className="nav-link text-white">Home</Link>
                                <Link to="/watches" className="nav-link text-white">Watches</Link>
                                <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
                                {
                                    user?.email ? <button onClick={logOUt} className='logoutBtn'>Logout</button>
                                        :
                                        <Link to="/login" className="nav-link text-white">Login</Link>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;