import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductCartContext } from "../../context/CartContext";
import "./products.css";
import { useQuery } from "react-query";
import Loading from "../Sheard/Loading";

const Products = () => {
  const { handleAddToCart } = useContext(ProductCartContext);

  const { data: product, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://olivia-brand-fashion-backend.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
                        alt="product"
                      />
                    </div>
                    <div className="product-btns">
                      <button
                        type="button"
                        className="btn-cart"
                        onClick={() => handleAddToCart(products)}
                      >
                        {" "}
                        add to cart
                        <span>
                          <i className="fas fa-plus"></i>
                        </span>
                      </button>
                      <Link to="/productsCart">
                        <button
                          type="button"
                          className="btn-buy"
                          onClick={() => handleAddToCart(products)}
                        >
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
