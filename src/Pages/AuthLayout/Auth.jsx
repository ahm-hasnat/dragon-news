import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';

const Auth = () => {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
         <nav className='w-full bg-[#F3F3F3] flex justify-center 
             sticky z-10 top-0 pl-96'>
       <Navbar></Navbar>
         </nav>
         
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;