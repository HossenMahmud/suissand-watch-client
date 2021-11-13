import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './ManageProduct.css';
const ManageProduct = () => {
    let { url } = useRouteMatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://thawing-scrubland-20471.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Order Delete Function
    const handleDelete = (id) => {
        let conform = window.confirm('Are You Sure Delete Item?');
        if (conform) {
            fetch(`https://thawing-scrubland-20471.herokuapp.com/deletewatch/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        alert('Succesfully Deleted')
                        const remainingUser = products.filter(user => user._id !== id);
                        setProducts(remainingUser)
                    }

                });
        }
        else {
            alert('Delete Canceled')
        }

    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12 mb-3 text-center">
                        <div className="manage-watch-title">
                            <h3>Manage Watch Item</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(product => <div key={product._id} className="col-lg-3 mb-4">
                            <div className="text-start manage-product-item">
                                <img className='img-fluid' src={product.image} alt="" />
                                <div className="py-3">
                                    <h5 className='text-black'>{product.model}</h5>
                                    <p>{product.description.slice(0, 90)} <span>....</span></p>
                                    <h3 className='text-start'><span style={{ color: '#D3A300' }}>$</span>{product.price}</h3>
                                    <div className='d-flex justify-content-between'>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                                        <Link to={`${url}/update/${product._id}`}>
                                            <button className='btn btn-info'>Update</button>
                                        </Link>
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

export default ManageProduct;