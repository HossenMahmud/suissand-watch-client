import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Reviews from '../Reviews/Reviews';
import Watches from '../Watches/Watches';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Watches></Watches>
            <Reviews></Reviews>
            <Blog></Blog>
        </div>
    );
};

export default Home;