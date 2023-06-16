import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import col1 from "../../images/col1.png";
import col2 from "../../images/col2.png";
import womenMan from "./womenMan.css";

const WomenMen = () => {
  return (
    <div className="p-3 ">
      <div className="row">
        <div className="col-lg-6 ">
          <Card className="bg-dark text-white border-0 containeer">
            <Card.Img className="imgHover" src={col1} alt="Card image" />
            <Card.ImgOverlay className=" d-flex justify-content-end align-items-center me-3">
              <div>
                <h5 className="text-danger font-monospace fw-bold">WOMEN'S</h5>
                <h2 className="text-black font-monospace fw-bold">
                  Snowboard{" "}
                </h2>
                <h2 className="text-black font-monospace fw-bold">Clothing</h2>
                <Card.Text>
                  <Link to="" className="text-black fw-bold">
                    Shop Clother
                  </Link>
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-lg-6 ">
          <Card className="bg-dark text-white border-0 containeer">
            <Card.Img className="imgHover" src={col2} alt="Card image" />
            <Card.ImgOverlay className=" d-flex justify-content-start align-items-center ms-3">
              <div>
                <h5 className="text-danger font-monospace fw-bold">MEN'S</h5>
                <h2 className="text-black font-monospace fw-bold">Rounded </h2>
                <h2 className="text-black font-monospace fw-bold">
                  Neck Cotton
                </h2>
                <Card.Text>
                  <Link to="" className="text-black fw-bold">
                    Shop Clother
                  </Link>
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WomenMen;
