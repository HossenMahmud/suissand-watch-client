import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Allwatches.css';
const Allwatches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('./watchFakeData.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);
    return (
        <div className='watch-bg'>
            <div className="container">
                <div className="row allwatches-bg-img">
                    <div className="col-lg-6 text-start">
                        <div className="watches-banner-title">
                            <h3>The Future Luxury Watches</h3>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    {
                        watches.map(watch => <div key={watch.id} className="col-lg-3 mb-4">
                            <div className="watch-item text-white text-start">
                                <img className='img-fluid' src={watch.image} alt="" />
                                <div className="watch-info py-3">
                                    <h3>{watch.name}</h3>
                                    <p>{watch.description.slice(0, 90)}</p>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={`/purchase/${watch.id}`}>
                                            <button className='watch-btn'>Purches Now</button>
                                        </Link>
                                        <h3 className='text-end'><span style={{ color: '#D3A300' }}>$</span>{watch.price}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allwatches;