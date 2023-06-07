import React, { Component } from "react";
import Slider from "react-slick";
import "./LogoSlider.css";

class LogoSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="slider-container">
        <Slider {...settings} className="logo-slider">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/brandlogo2_93dc40fd-5a30-4eb5-9c49-9aac604cb730.png?v=1614736403"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/2_22529c80-e983-4e12-b533-a9801df8d2d2.jpg?v=1614769073"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/brandlogo1_aa9b7c8b-e2e5-40bc-b79e-c7c56f7bd380.png?v=1614736403"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/brandlogo4_15168ce1-c19e-4d49-82ab-f8a777af442a.png?v=1614736403"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/brandlogo6_586c11a6-66c5-4a48-8d34-3dea529ccf93.png?v=1614769235"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/brandlogo3_ec303efd-2e4e-4e7d-bae4-dd6933d8604d.png?v=1614736403"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default LogoSlider;
