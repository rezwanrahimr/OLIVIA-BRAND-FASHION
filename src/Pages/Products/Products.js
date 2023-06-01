import React, { useEffect } from "react";
import product from "./products.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://olivia-brand-fashion-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <section id="mySection">
      <div className=" mt-5">
        <h1 className="text-center">Feature Products</h1>
        <h6 className="text-center font-monospace">Top sale on this week</h6>

        <div className="AllProducts">
          {product.slice(0, 12).map((products) => (
            <div key={products._id}>
              <div className="product-items">
                {" "}
                <div className="product">
                  <div className="product-content">
                    <div className="product-img">
                      <img
                        className="w-100"
                        src={products.ProductImage}
                        alt="product image"
                      />
                    </div>
                    <div className="product-btns">
                      <button type="button" className="btn-cart">
                        {" "}
                        add to cart
                        <span>
                          <i className="fas fa-plus"></i>
                        </span>
                      </button>
                      <Link to={`/Cart/${products._id}`}>
                        <button type="button" className="btn-buy">
                          {" "}
                          buy now
                          <span>
                            <i className="fas fa-shopping-cart"></i>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="product-info">
                    <div className="product-info-top">
                      <h2 className="sm-title">{products.BrandName}</h2>
                      <div className="rating">
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="far fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <a href="#" className="product-name">
                      {products.productName}
                    </a>
                    <p className="product-price">{products.DiscountPrice}</p>
                    <p className="product-price">{products.ProductPrice}</p>
                  </div>

                  <div className="off-info">
                    <h2 className={products.Discount ? "sm-title" : ""}>
                      {products.Discount}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="AllProductsButton text-center">
          <Link to="/Shop" className="text-decoration-none">
            <p className="mt-3 ">VIEW ALL PRODUCTS</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
