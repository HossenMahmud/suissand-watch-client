import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import loginImg from '../../../images/login.png';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
const Login = () => {
    const { loginUser } = useFirebase();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            <div className='register-bg py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-12 col-sm-12 col-md-6 text-start'>
                            <div className='register-form'>
                                <h3 className='text-white mb-3'>Login</h3>
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="mb-3">
                                        <input name="email" onBlur={handleOnBlur} type="email" className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input name="password" onBlur={handleOnBlur} type="password" placeholder="Enter Password" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-warning mb-3">Submit</button>
                                </form>
                                <NavLink style={{ textDecoration: 'none' }} to='/register'>
                                    Already Registered? Please Register
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
            <Footer></Footer>
        </>
    );
};

export default Login;