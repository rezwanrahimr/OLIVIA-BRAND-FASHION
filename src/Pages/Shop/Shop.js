import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OurService from '../OurService/OurService';
import Footer from '../Sheard/Footer';
import Subscribe from '../Subscribe/Subscribe';
import shop from './shop.css';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [productCount,setProductCount] = useState(0);
    const [selectPage,setSelectPage] = useState(0);
    const [productSize,setProductSize] = useState(8);
    console.log(productCount)

    // Load All Products.
    useEffect(() => {
        fetch(`https://pacific-journey-95029.herokuapp.com/productss?page=${selectPage}&size=${productSize}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [selectPage,productSize]);

    // Product Count.
    useEffect(()=>{
        fetch('https://pacific-journey-95029.herokuapp.com/productsCount')
        .then(res => res.json())
        .then(data => {
            const count = data.result;
            const result = Math.ceil(count/8);
            setProductCount(result);
        })
    },[])
    return (
        <div className=' mt-5'>
            <div className='AllProducts'>
            {
                product.map(products => <div key={products._id}>
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
           

           <div className='d-flex justify-content-center paginaton-button my-5'>
           {
                  [...Array(productCount).keys()].map(number => <div className='p-1'><button onClick={()=> setSelectPage(number)} className={selectPage == number ? 'select':''}>
                    {number+1}
                  </button></div>)     
            }
           
           </div>
           
           <Subscribe></Subscribe>
           <Footer></Footer>
        </div>
    );
};

export default Shop;