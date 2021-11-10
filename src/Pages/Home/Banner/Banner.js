import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 col-sm-12 col-md-12 text-start">
                        <div className='banner-info'>
                            <h4>Nice Top Collection</h4>
                            <h1>Classic Leather Watch</h1>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <button className='banner-btn'>Shopping Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;