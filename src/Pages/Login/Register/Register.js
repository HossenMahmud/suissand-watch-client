import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import loginImg from '../../../images/login.png';
import './Register.css';
const Register = () => {
    const { registerUser, error, user, isLoading } = useFirebase();
    const [registerData, setRegisterData] = useState({})
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleLoginSubmit = e => {
        if (registerData.password === registerData.repassword) {
            registerUser(registerData.email, registerData.password, registerData.name, history);
        }
        e.preventDefault();
    }
    return (
        <div className='register-bg py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-12 col-sm-12 col-md-6 text-start'>
                        <div className='register-form'>
                            <h3 className='text-white mb-3'>Register</h3>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <input name="name" onBlur={handleOnBlur} type="text" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="mb-3">
                                    <input name="email" onBlur={handleOnBlur} type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                    <input name="password" onBlur={handleOnBlur} type="password" placeholder="Enter Password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input name="repassword" onBlur={handleOnBlur} type="password" placeholder="Re-Type Password" className=" form-control" />
                                </div>
                                <button type="submit" className="btn btn-warning mb-3">Register</button>
                                {isLoading && <div class="spinner-border text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>}
                                {user?.email && <div class="alert alert-success" role="alert">
                                    Successfully User Created
                                </div>}
                                {error && <div class="alert alert-danger" role="alert">
                                    {error}
                                </div>}
                            </form>
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                Already Registered? Please Login
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-lg-7 col-12 col-sm-12 col-md-6'>
                        <div className='login-img'>
                            <img className='img-fluid' src={loginImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;