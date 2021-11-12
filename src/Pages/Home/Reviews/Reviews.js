import React, { useEffect, useState } from 'react';
import './Reviews.css';
import photo from '../../../images/avatar-1.svg';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='review-bg py-5'>
            <div className="container">
                <div className="review-title">
                    <h1>Clients & Reviews</h1>
                </div>
                <div className="row">
                    {
                        reviews.map(review => <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
                            <img src={photo} alt="" />
                            <h4 className='review-name mt-3'>{review.userName}</h4>
                            <p className='text-white'>{review.message}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;