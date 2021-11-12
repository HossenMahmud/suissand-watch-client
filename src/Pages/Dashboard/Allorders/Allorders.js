import React, { useEffect, useState } from 'react';

const Allorders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // Order Delete Function
    const handleDelete = (id) => {
        let conform = window.confirm('Are You Sure Delete Item?');
        if (conform) {
            fetch(`http://localhost:5000/deleteOrders/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        alert('Succesfully Deleted');
                        const remainingUser = orders.filter(user => user._id !== id);
                        setOrders(remainingUser)
                    }

                });
        }
        else {
            alert('Delete Canceled')
        }
    };
    return (
        <div>
            <div className="container my-5">
                <div className="orders-title">
                    <h2 className='fw-bold'>All Orders</h2>
                </div>
                <div className="row">
                    <div className=" table-responsive table-responsive-sm table-responsive-md">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Watch-Title</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => (
                                        <tr key={order._id}>
                                            <td>{index}</td>
                                            <td>{order.userName}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phone}</td>
                                            <td>{order.watchName}</td>
                                            <td>{order.address}</td>
                                            <td>{order.date}</td>
                                            <td className='order-icon'>
                                                <i className="fas fa-trash-alt icon2" onClick={() => handleDelete(order._id)}></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allorders;