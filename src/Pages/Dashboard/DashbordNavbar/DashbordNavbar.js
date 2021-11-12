import React from 'react';
import './DashbordNavbar.css';
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
const DashbordNavbar = () => {
    let { url } = useRouteMatch();
    const { user, logOUt, admin } = useAuth();
    return (
        <div className='dashboard-header-bg'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="d-flex">
                            <div className="User-Name">
                                <h2>{user.displayName}</h2>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <Link to='/home'>
                                    Home
                                </Link>
                                <Link to={`${url}`}>
                                    Dashboard
                                </Link>
                                {
                                    admin ? (
                                        <>
                                            <Link to={`${url}/makeAdmin`}>
                                                MakeAdmin
                                            </Link>
                                            <Link to={`${url}/allorders`}>
                                                AllOrders
                                            </Link>
                                            <Link to={`${url}/addwatch`}>
                                                AddWatch
                                            </Link>
                                        </>
                                    ) : <>
                                        <Link to={`${url}/myOrder`}>
                                            MyOrders
                                        </Link>
                                        <Link to={`${url}/addreview`}>
                                            AddReview
                                        </Link>
                                        <Link to={`${url}/orderPay`}>
                                            Pay
                                        </Link>
                                    </>
                                }
                                {
                                    user?.email ? <button onClick={logOUt} className='logoutBtn'>Logout</button>
                                        :
                                        <Link to="/login" className="nav-link text-white">Login</Link>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default DashbordNavbar;