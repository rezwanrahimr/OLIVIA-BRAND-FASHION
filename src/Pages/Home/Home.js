import React from 'react';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import WomenMen from '../WomenMen/WomenMen';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WomenMen></WomenMen>
            <Products></Products>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;