import React, { useEffect } from 'react';
import product from './products.css'
import { useState } from 'react';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className='text-center'>Feature Products</h1>
            <h6 className='text-center font-monospace'>Top sale on this week</h6>

            {
                product.map(products => <div key={products._id}>
                    <div className=' d-flex'>
                        <div class="product-items"> <div class="product">
                            <div class="product-content">
                                <div class="product-img">
                                    <img className='w-100' src={products.ProductImage} alt="product image" />
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
                                    <h2 class="sm-title">{products.BrandName}</h2>
                                    <div class="rating">
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="far fa-star"></i></span>
                                    </div>
                                </div>
                                <a href="#" class="product-name">{products.productName}</a>
                                <p class="product-price">{products.DiscountPrice}</p>
                                <p class="product-price">{products.ProductPrice}</p>
                            </div>

                            <div class="off-info">
                                <h2 class={products.Discount ? 'sm-title':''}>{products.Discount}</h2>
                            </div>
                        </div></div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default Products;