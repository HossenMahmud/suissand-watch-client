import React from 'react';
import './Reviews.css';
import photo from '../../../images/avatar-1.svg';
const Reviews = () => {
    return (
        <div className='review-bg py-5'>
            <div className="container">
                <div className="review-title">
                    <h1>Clients & Reviews</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
                        <img src={photo} alt="" />
                        <h4 className='review-name'>Hossen Mahmud</h4>
                        <p className='text-white'>This was exactly what I needed for my portfolio, and it looks great. I had a couple issues that support helped troubleshoot both via email and on the comments, which definitely made it worth the price. I'm very pleased with this purchase.</p>
                    </div>
                    <div className="col-lg-6  col-md-12 col-sm-12 col-12  mb-4">
                        <img src={photo} alt="" />
                        <h4 className='review-name'>Himel Mahmud</h4>
                        <p className='text-white'>This was exactly what I needed for my portfolio, and it looks great. I had a couple issues that support helped troubleshoot both via email and on the comments, which definitely made it worth the price. I'm very pleased with this purchase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;