import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Sheard/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./shop.css";
import { useQuery } from "react-query";
import Loading from "../Sheard/Loading";

const Shop = () => {
  // const [product, setProduct] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [selectPage, setSelectPage] = useState(0);
  const [productSize, setProductSize] = useState(8);

  const { data: product, isLoading } = useQuery({
    queryKey: ["productss", selectPage, productSize],
    queryFn: async () => {
      const res = await fetch(
        `https://olivia-brand-fashion-backend.vercel.app/productss?page=${selectPage}&size=${productSize}`
      );
      const data = await res.json();
      return data;
    },
  });

  // Product Count.
  useEffect(() => {
    fetch("https://olivia-brand-fashion-backend.vercel.app/productsCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.result;
        const result = Math.ceil(count / 8);
        setProductCount(result);
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(product);
  return (
    <div className="shop-container">
      <div className="AllProducts">
        {product?.length < 1 ? (
          <h1>No Data Found !</h1>
        ) : (
          product.map((products) => (
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
          ))
        )}
      </div>

      <div className="d-flex justify-content-center paginaton-button my-5">
        {[...Array(productCount).keys()].map((number) => (
          <div className="p-1">
            <button
              onClick={() => setSelectPage(number)}
              className={selectPage == number ? "select" : ""}
            >
              {number + 1}
            </button>
          </div>
        ))}
      </div>

      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Shop;
