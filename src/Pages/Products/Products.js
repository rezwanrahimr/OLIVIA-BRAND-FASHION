import React, { useEffect } from 'react';
import product from './products.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://pacific-journey-95029.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className=' mt-5'>
            <h1 className='text-center'>Feature Products</h1>
            <h6 className='text-center font-monospace'>Top sale on this week</h6>

            <div className='AllProducts'>
            {
                product.slice(0,12).map(products => <div key={products._id}>
                        <div class="product-items"> <div class="product">
                            <div class="product-content">
                                <div class="product-img">
                                    <img className='w-100' src={products.ProductImage} alt="product image" />
                                </div>
                                <div class="product-btns">
                                    <button type="button" class="btn-cart"> add to cart
                                        <span><i class="fas fa-plus"></i></span>
                                    </button>
                                    <Link to={`/Cart/${products._id}`}><button type="button" class="btn-buy"> buy now
                                        <span><i class="fas fa-shopping-cart"></i></span>
                                    </button></Link>
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
                )
            }
            </div>
            <div className='AllProductsButton text-center'>
                <Link to='/Shop' className='text-decoration-none'><p className='mt-3 '>VIEW ALL PRODUCTS</p></Link>
            </div>
        </div>

    );
};

export default Products;