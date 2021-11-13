import React, { useEffect, useState } from 'react';
import './Reviews.css';
import photo from '../../../images/avatar-1.svg';
import Rating from 'react-rating';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://thawing-scrubland-20471.herokuapp.com/reviews')
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
                        reviews.map(review => <div key={review._id} className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
                            <img src={photo} alt="" />
                            <h4 className='review-name my-3'>{review.userName}</h4>
                            <Rating
                                className='text-warning'
                                initialRating={review.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly></Rating>
                            <p className='text-white mt-3'>{review.message}</p>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Reviews;