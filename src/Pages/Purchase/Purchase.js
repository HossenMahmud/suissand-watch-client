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
        fetch('/watchFakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

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
        fetch("http://localhost:5000/orders", {
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
    const purchaseWatch = data?.filter(td => td.id === parseInt(id));

    return (
        <>
            <Header></Header>
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4  col-12 col-sm-12 mb-4">
                            <div className="purchase-img">
                                <img className='img-fluid' src={purchaseWatch[0]?.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 text-start  col-12 col-sm-12 mb-4">
                            <div className="purchase-info">
                                <h2>{purchaseWatch[0]?.name}</h2>
                                <p>{purchaseWatch[0]?.description}</p>
                                <h3><span className='text-black'>Price:</span>${purchaseWatch[0]?.price}</h3>
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
                                        <input required onBlur={handleOnBlur} name="watchName" defaultValue={purchaseWatch[0]?.name} type="text" className=" form-control" />
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