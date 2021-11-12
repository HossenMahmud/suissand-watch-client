import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 mx-auto col-lg-6 '>
                        <div className='admin-form'>
                            <h3 className='mb-3'>Make Admin</h3>
                            <form onSubmit={handleAdminSubmit}>
                                <div className="mb-3">
                                    <input name="email" onBlur={handleOnBlur} type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <button type="submit" className="btn btn-warning mb-3 fw-bold">Add Admin</button>
                            </form>
                            {success && <div class="alert alert-success" role="alert">
                                Made Admin Successfully
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;