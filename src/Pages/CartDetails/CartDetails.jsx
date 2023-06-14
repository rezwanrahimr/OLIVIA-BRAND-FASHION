import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../images/companyLogo.png";

const CartDetails = ({ subTotal, totalPrice }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <MDBCol lg="5">
      <MDBCard className="bg-primary text-white rounded-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <MDBTypography tag="h5" className="mb-0">
              Cart details
            </MDBTypography>
            <MDBCardImage
              src={companyLogo}
              fluid
              className="rounded-3"
              style={{ width: "45px" }}
              alt="Avatar"
            />
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <p className="mb-2">Subtotal</p>
            <p className="mb-2">${subTotal}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="mb-2">Shipping</p>
            <p className="mb-2">$20.00</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="mb-2">Total(Incl. taxes)</p>
            <p className="mb-2">${totalPrice}</p>
          </div>

          {location.pathname === "/checkoutForm" ? (
            ""
          ) : (
            <MDBBtn color="info" block size="lg">
              <Link
                to={`${
                  location.pathname == "/productsCart"
                    ? "/checkoutForm"
                    : "/Dashboard/payment "
                }`}
              >
                <div className="d-flex justify-content-between">
                  <span>${totalPrice}</span>
                  <span>
                    Checkout{" "}
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </MDBBtn>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CartDetails;
