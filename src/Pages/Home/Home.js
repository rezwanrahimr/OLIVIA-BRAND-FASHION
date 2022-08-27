import React from 'react';
import Products from '../Products/Products';
import WomenMen from '../WomenMen/WomenMen';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WomenMen></WomenMen>
            <Products></Products>
        </div>
    );
};

export default Home;