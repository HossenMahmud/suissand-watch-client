import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import google from '../../../images/img-googleplay.webp';
import playStore from '../../../images/img-appstore.webp';

const Footer = () => {
    return (
        <>
            <div className="footer-bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12 col-sm-12 col-md-6 mb-4">
                            <div className="footer-contact-info text-start">
                                <h4 className='mb-4'>Contact Info</h4>
                                <p>Address: 123 Main Street,Anytown,CA 12345 - USA.</p>
                                <p>Phone: (012) 800 000 789</p>
                                <p>Fax: (012) 800 888 789</p>
                                <p>Email: demo@hashthemes.com</p>
                                <div className='social-icons'>
                                    <Link to='/home'>
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link to='/home'>
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link to='/home'>
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link to='/home'>
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-12 col-md-6 mb-4">
                            <div className="row footer-link text-start">
                                <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                                    <div className="footer-link-item">
                                        <h4 className='mb-4'>Information</h4>
                                        <Link to="/home" className="nav-link text-white">Home</Link>
                                        <Link to="/home" className="nav-link text-white">About Us</Link>
                                        <Link to="/home" className="nav-link text-white">Quick Contact</Link>
                                        <Link to="/home" className="nav-link text-white">Blog Pages</Link>
                                        <Link to="/home" className="nav-link text-white">Client Feed</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                                    <div className="footer-link-item">
                                        <h4 className='mb-4'>Information</h4>
                                        <Link to="/home" className="nav-link text-white">Extras</Link>
                                        <Link to="/home" className="nav-link text-white">Concord History</Link>
                                        <Link to="/home" className="nav-link text-white">Client Feed</Link>
                                        <Link to="/home" className="nav-link text-white">About Us</Link>
                                        <Link to="/home" className="nav-link text-white">Blog Pages</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-12 col-md-6 mb-4">
                            <div className="footer-item text-start">
                                <h4 className='mb-4'>Get the app</h4>
                                <p>GreenLife App is now available on Google Play & App Store. Get it now.</p>
                                <img src={google} className='img-fluid mb-3' alt="" /><br />
                                <img src={playStore} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom-bg py-3'>
                <div className="container">
                    <p className='text-white mt-3'>Copyright © Hossen 2021. All Right Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;