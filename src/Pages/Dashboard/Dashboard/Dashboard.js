import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../../AdminRoute/AdminRoute';
import AddWatch from '../AddWatch/AddWatch';
import Allorders from '../Allorders/Allorders';
import DashboardHome from '../DashboardHome/DashboardHome';
import DashbordNavbar from '../DashbordNavbar/DashbordNavbar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import OrderPay from '../OrderPay/OrderPay';
import Review from '../Review/Review';
const Dashboard = () => {
    let { path } = useRouteMatch();
    return (
        <>
            <DashbordNavbar></DashbordNavbar>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/myOrder`}>
                    <MyOrder></MyOrder>
                </Route>
                <Route path={`${path}/orderPay`}>
                    <OrderPay></OrderPay>
                </Route>
                <Route path={`${path}/addreview`}>
                    <Review></Review>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/allorders`}>
                    <Allorders></Allorders>
                </AdminRoute>
                <AdminRoute path={`${path}/addwatch`}>
                    <AddWatch></AddWatch>
                </AdminRoute>
            </Switch>
        </>
    );
};

export default Dashboard;