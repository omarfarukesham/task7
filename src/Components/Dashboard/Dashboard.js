import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../Home';
import Main from './Main';
const Dashboard = () => {
    return (
        <>
            <div class="drawer drawer-mobile bg-base-200">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-2xl text-purple-500 text-bold text-center mt-5'>Search Product</h1>
                   
                    <Main></Main>
                     
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                
            </div>
        </>
    );
};

export default Dashboard;