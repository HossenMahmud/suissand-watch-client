import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Allorders from '../Allorders/Allorders';
import MyOrder from '../MyOrder/MyOrder';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <div>
            {
                admin ? <Allorders></Allorders> :
                    <MyOrder></MyOrder>
            }
        </div>
    );
};

export default DashboardHome;