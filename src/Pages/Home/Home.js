import React from "react";
import Blogs from "../Blogs/Blogs";
import OurService from "../OurService/OurService";
import Products from "../Products/Products";
import Footer from "../Sheard/Footer";
import Subscribe from "../Subscribe/Subscribe";
import WomenMen from "../WomenMen/WomenMen";
import Banner from "./Banner";
import "./home.css";
import BackgroundVideo from "../BackgrounVideo/BackgroundVideo";
import LogoSlider from "../LogoSlider/LogoSlider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WomenMen></WomenMen>
      <Products></Products>
      <BackgroundVideo></BackgroundVideo>
      <LogoSlider></LogoSlider>
      <Blogs></Blogs>
      <OurService></OurService>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
