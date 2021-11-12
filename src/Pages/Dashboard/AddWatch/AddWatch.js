import React, { useState } from 'react';
import './AddWatch.css';
const AddWatch = () => {
    const [watch, setWatch] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newWatchData = { ...watch };
        newWatchData[field] = value;
        setWatch(newWatchData);
    }
    const handleWatchSubmit = (e) => {
        // Collect data
        const watchData = {
            ...watch
        }
        fetch("http://localhost:5000/addwatches", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(watchData),
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
        <div className='add-watch-bg py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <h2 className='text-white mb-3'>Add Watch</h2>
                        <div className="review-form">
                            <form onSubmit={handleWatchSubmit}>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="model" type="text" placeholder='Enter Watch Model Number' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="price" type="number" placeholder='Enter Price' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <textarea required onBlur={handleOnBlur} name="description" type="text" placeholder="Enter Description" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="image" type="text" placeholder="Put Watch Image Link" className=" form-control" />
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

export default AddWatch;