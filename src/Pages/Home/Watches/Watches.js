import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import Footer from '../../Shared/Footer/Footer';
//import Header from '../../Shared/Header/Header';
import './Watches.css';
const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://thawing-scrubland-20471.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);
    return (
        <div className='watch-bg py-5'>
            <div className="container">
                <div className="watch-title">
                    <h1>Popular Watches</h1>
                </div>
                <div className="row">
                    {
                        watches.slice(0, 6).map(watch => <div key={watch._id} className="col-lg-4 mb-4">
                            <div className="watch-item text-white text-start">
                                <img className='img-fluid' src={watch.image} alt="" />
                                <div className="watch-info py-3">
                                    <h5>{watch.model}</h5>
                                    <p>{watch.description.slice(0, 90)}</p>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={`/purchase/${watch._id}`}>
                                            <button className='watch-btn'>Purches Now</button>
                                        </Link>
                                        <h3 className='text-end'><span style={{ color: '#D3A300' }}>$</span>{watch.price}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link to='/watches'>
                    <button className="watch-more-button px-5">See More Watches</button>
                </Link>
            </div>
        </div>
    );
};

export default Watches;