import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Header/Navbar';
import LeftAside from '../../components/LeftAside/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../../components/RightAside/RightAside';

const Root = () => {
    return (
        <div>
            <Header></Header>
             <Navbar></Navbar>
             <main className='flex  w-6xl mx-auto mt-6 gap-3'>
                <aside className='w-1/4'>
                    <LeftAside></LeftAside>
                </aside>
                <main className='w-2/4'>
                    <Outlet />
                </main>
                <aside className='w-1/4'>
                    <RightAside></RightAside>
                </aside>
                </main>
            
        </div>
    );
};

export default Root;