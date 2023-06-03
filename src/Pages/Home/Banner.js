import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import BannerOne from "../../images/banner1.png";
import "./banner.css";
import test from "./bag_5dd52ac7-e94f-463a-8273-a8cd1578a2ce.mp4";
const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={BannerOne} alt="Second slide" />

          <Carousel.Caption>
            <div className="HeaderText">
              <h5 className="text-muted text-start fw-bold lh-1">
                SPRING / SUMMER 2022
              </h5>
              <h1 className="text-danger text-start fw-bold display-1 lh-1">
                Sale 50%
              </h1>
              <h1 className="text-dark text-start fw-bold display-2 lh-1">
                Black Friday
              </h1>
              <Button
                className="d-flex justify-content-startd text-black fw-bold mt-5"
                variant="outline-danger"
              >
                SHOP NOW{" "}
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video src={test} autoPlay loop muted playsInline></video>
          <Carousel.Caption className="carousel-content">
            <div className="">
              <h2 className=" text-muted text-start text-white fw-bold lh-1">
                DISCOVER THE LATEST
              </h2>
              <h2 className="text-muted text-start text-white fw-bold lh-1">
                {" "}
                BAG COLLECTIONS
              </h2>
              <Button className="d-flex justify-content-startd fw-bold mt-4">
                SHOP NOW
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={BannerOne} alt="Third slide" />
          <Carousel.Caption>
            <div className="HeaderText">
              <h5 className="text-muted text-start fw-bold lh-1">
                SPRING / SUMMER 2022
              </h5>
              <h1 className="text-danger text-start fw-bold display-1 lh-1">
                Sale 50%
              </h1>
              <h1 className="text-dark text-start fw-bold display-2 lh-1">
                Black Friday
              </h1>
              <Button
                className="d-flex justify-content-startd text-black fw-bold mt-5"
                variant="outline-danger"
              >
                SHOP NOW
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
