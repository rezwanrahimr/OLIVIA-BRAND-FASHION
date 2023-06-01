import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    ProductImage,
    BrandName,
    DiscountPrice,
    ProductPrice,
    productName,
    Discount,
  } = product;
  return (
    <div>
      <div className="product-items">
        {" "}
        <div className="product">
          <div className="product-content">
            <div className="product-img">
              <img className="w-100" src={ProductImage} alt="product image" />
            </div>
            <div className="product-btns">
              <button type="button" className="btn-cart">
                {" "}
                add to cart
                <span>
                  <i className="fas fa-plus"></i>
                </span>
              </button>
              <Link to={`/Cart/${_id}`}>
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
              <h2 className="sm-title">{BrandName}</h2>
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
              {productName}
            </a>
            <p className="product-price">{DiscountPrice}</p>
            <p className="product-price">{ProductPrice}</p>
          </div>

          <div className="off-info">
            <h2 className={Discount ? "sm-title" : ""}>{Discount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
