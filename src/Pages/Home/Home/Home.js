import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Reviews from '../Reviews/Reviews';
import Watches from '../Watches/Watches';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Watches></Watches>
            <Reviews></Reviews>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;