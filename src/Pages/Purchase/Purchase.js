import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Purchase.css';
const Purchase = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/watchFakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const purchaseWatch = data?.filter(td => td.id === parseInt(id));
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="purchase-img">
                            <img className='img-fluid' src={purchaseWatch[0]?.image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 text-start">
                        <div className="purchase-info p-3">
                            <h2>{purchaseWatch[0]?.name}</h2>
                            <p>{purchaseWatch[0]?.description}</p>
                            <h3>${purchaseWatch[0]?.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;