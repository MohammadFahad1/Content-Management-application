import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto cupcake:bg-lime-100 night:bg-grey-900'>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;