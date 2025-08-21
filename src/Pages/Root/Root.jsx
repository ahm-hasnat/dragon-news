import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Header/Navbar';
import LeftAside from '../../components/LeftAside/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../../components/RightAside/RightAside';

const Root = () => {
    return (
        <div className='w-6xl mx-auto'>
            <Header></Header>
            <nav className='w-full bg-white flex justify-end 
             sticky z-10 top-0 py-3'>
             <Navbar></Navbar>
             </nav>
             <main className='flex  w-full  mt-4 gap-3'>
                <aside className='w-1/4 h-fit sticky top-24'>
                    <LeftAside></LeftAside>
                </aside>
                <main className='w-2/4'>
                    <Outlet />
                </main>
                <aside className='w-1/4 h-fit sticky top-24'>
                    <RightAside></RightAside>
                </aside>
                </main>
            
        </div>
    );
};

export default Root;