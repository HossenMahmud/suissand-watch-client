import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="container text-center notfound my-5">
            <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>Back To  <Link to='/home'>Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;