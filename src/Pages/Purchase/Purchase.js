import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css';
const Purchase = () => {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [purchaseData, setPurchaseData] = useState({})

    useEffect(() => {
        fetch(`https://thawing-scrubland-20471.herokuapp.com/watch/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...purchaseData };
        newRegisterData[field] = value;
        setPurchaseData(newRegisterData);
    }
    const handleOrderSubmit = (e) => {
        // Collect data
        const order = {
            ...purchaseData
        }
        fetch("https://thawing-scrubland-20471.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Order This Package");
                    e.target.reset();
                }
            });
        e.preventDefault();
    }


    return (
        <>
            <Header></Header>
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4  col-12 col-sm-12 mb-4">
                            <div className="purchase-img">
                                <img className='img-fluid' src={data.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 text-start  col-12 col-sm-12 mb-4">
                            <div className="purchase-info">
                                <h2>{data.model}</h2>
                                <p>{data.description}</p>
                                <h4><span className='text-black'>Price:</span>${data.price}</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 col-sm-12 mb-4">
                            <div className='purchase-form'>
                                <h3 className='text-black mb-3'>Submit To Order</h3>
                                <form onSubmit={handleOrderSubmit}>
                                    <div className="mb-3">
                                        <input required onBlur={handleOnBlur} name="userName" defaultValue={user.displayName} type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required onBlur={handleOnBlur} name="email" defaultValue={user.email} type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required onBlur={handleOnBlur} name="watchName" defaultValue={data.model} type="text" className=" form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required onBlur={handleOnBlur} name="phone" type="phone" placeholder="Enter Phone" className=" form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required onBlur={handleOnBlur} name="address" type="text" placeholder="Enter Address" className=" form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required onBlur={handleOnBlur} name="date" type="date" placeholder="Enter Date" className=" form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-warning mb-3">Purches Now</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;