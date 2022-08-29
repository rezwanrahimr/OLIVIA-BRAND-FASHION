import React from 'react';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Footer from '../Sheard/Footer';
import WomenMen from '../WomenMen/WomenMen';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WomenMen></WomenMen>
            <Products></Products>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;