import React from "react";
import { Link } from "react-router-dom";
import blogs from "./blogs.css";

const Blogs = () => {
  return (
    <div className="mt-5 p-3">
      <h1 className="text-center fw-bold">LATEST BLOGS</h1>
      <h6 className="text-center fw-light font-monospace">
        The latest news and blogs
      </h6>
      <div className="row mt-5">
        <div className="col-lg-4 p-2">
          <div className="card text-bg-dark border-0 imgHover">
            <img
              src="https://cdn.shopify.com/s/files/1/0263/9501/7288/articles/blog14_450x@3x.jpg?v=1573787741"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay d-flex align-items-end">
              <Link className="card-text text-decoration-none " to="">
                <p className="card-text text-white lh-1">NOV 19,2023</p>
                <p className="fw-bold text-white  fs-5 lh-1">
                  Life Advice Looking Through A Window
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-2">
          <div className="card text-bg-dark border-0 imgHover">
            <img
              src="https://cdn.shopify.com/s/files/1/0263/9501/7288/articles/blog10_450x@3x.jpg?v=1573787753"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay d-flex align-items-end">
              <Link className="card-text text-decoration-none " to="">
                <p className="card-text text-white lh-1">NOV 19,2023</p>
                <p className="fw-bold text-white  fs-5 lh-1">
                  A Discount Toner Cartridge Is Better Than Ever And You Will
                  Save 50 Or More
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-2">
          <div className="card text-bg-dark border-0 imgHover">
            <img
              src="https://cdn.shopify.com/s/files/1/0263/9501/7288/articles/blog15_450x@3x.jpg?v=1573787766"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay d-flex align-items-end">
              <Link className="card-text text-decoration-none " to="">
                <p className="card-text text-white lh-1">NOV 19,2023</p>
                <p className="fw-bold text-white  fs-5 lh-1">
                  Looking For Your Dvd Printing Solution
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
