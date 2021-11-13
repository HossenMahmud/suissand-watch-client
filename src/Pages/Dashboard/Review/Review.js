import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Review.css';
const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...review };
        newReviewData[field] = value;
        setReview(newReviewData);
    }
    const handleReviewSubmit = (e) => {
        // Collect data
        const reviewData = {
            ...review
        }
        fetch("https://thawing-scrubland-20471.herokuapp.com/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Added Review");
                    e.target.reset();
                }
            });
        e.preventDefault();
    }
    return (
        <div className='addReview-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <h2 className='mb-3'>Add Product Review</h2>
                        <div className="review-form">
                            <form onSubmit={handleReviewSubmit}>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} defaultValue={user.displayName} name="userName" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} defaultValue={user.email} name="email" type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="rating" type="text" placeholder="Enter Rating Number (0-5)" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <textarea required onBlur={handleOnBlur} name="message" type="text" placeholder="Enter Review Message" className=" form-control" />
                                </div>
                                <button type="submit" className="btn btn-warning mb-3 fw-bold">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;