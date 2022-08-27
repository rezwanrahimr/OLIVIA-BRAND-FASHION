import React from 'react';
import product from './products.css'

const Products = () => {
    return (
        <div>
            <h1 className='text-center'>Feature Products</h1>
            <h6 className='text-center font-monospace'>Top sale on this week</h6>
            <div className=' d-flex'>
                <div class="product-items"> <div class="product">
                    <div class="product-content">
                        <div class="product-img">
                            <img className='w-100' src="https://cdn.shopify.com/s/files/1/0263/9501/7288/products/p22_fbc52730-f215-41b6-954b-54afe83b919e_450x577_crop_center.jpg?v=1573786598" alt="product image" />
                        </div>
                        <div class="product-btns">
                            <button type="button" class="btn-cart"> add to cart
                                <span><i class="fas fa-plus"></i></span>
                            </button>
                            <button type="button" class="btn-buy"> buy now
                                <span><i class="fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class="product-info">
                        <div class="product-info-top">
                            <h2 class="sm-title">lifestyle</h2>
                            <div class="rating">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="far fa-star"></i></span>
                            </div>
                        </div>
                        <a href="#" class="product-name">mens shoes DN 23XX, new product</a>
                        <p class="product-price">$ 150.00</p>
                        <p class="product-price">$ 133.00</p>
                    </div>

                    <div class="off-info">
                        <h2 class="sm-title">25% off</h2>
                    </div>
                </div></div>
            </div>
        </div>

    );
};

export default Products;