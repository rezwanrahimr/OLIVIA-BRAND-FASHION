import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import CartDetails from "../CartDetails/CartDetails";
import { ProductCartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CheckOutForm.css";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const { subTotal, totalPrice, setShippingAddress } =
    useContext(ProductCartContext);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleCheckOutForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const address = form.address.value;
    const phone = form.phone.value;
    const additionalInfo = form.additionalInfo.value;

    const shippingAddress = {
      name,
      address,
      phone,
      additionalInfo,
    };

    setShippingAddress(shippingAddress);
    navigate("/Dashboard/payment");
  };
  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#eee", marginTop: "85px" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      Shipping Address (Please Fill Out Your Information)
                    </MDBTypography>

                    <hr />
                    <form onSubmit={handleCheckOutForm}>
                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div class="row mb-4">
                        <div class="col">
                          <div class="form-outline">
                            <input
                              required
                              name="firstName"
                              type="text"
                              id="form6Example1"
                              class="form-control"
                            />
                            <label class="form-label" for="form6Example1">
                              First name
                            </label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <input
                              required
                              name="lastName"
                              type="text"
                              id="form6Example2"
                              class="form-control"
                            />
                            <label class="form-label" for="form6Example2">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Text input --> */}
                      <div class="form-outline mb-4">
                        <input
                          required
                          name="address"
                          type="text"
                          id="form6Example4"
                          class="form-control"
                        />
                        <label class="form-label" for="form6Example4">
                          Address
                        </label>
                      </div>
                      {/* <!-- Email input --> */}
                      <div class="form-outline mb-4">
                        <input
                          name="email"
                          value={user?.email}
                          type="email"
                          id="form6Example5"
                          class="form-control"
                        />
                      </div>
                      {/* <!-- Number input --> */}
                      <div class="form-outline mb-4">
                        <input
                          required
                          name="phone"
                          type="number"
                          id="form6Example6"
                          class="form-control"
                        />
                        <label class="form-label" for="form6Example6">
                          Phone
                        </label>
                      </div>
                      {/* 
  <!-- Message input --> */}
                      <div class="form-outline mb-4">
                        <textarea
                          required
                          name="additionalInfo"
                          class="form-control"
                          id="form6Example7"
                          rows="4"
                        ></textarea>
                        <label class="form-label" for="form6Example7">
                          Additional information
                        </label>
                      </div>
                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4"
                      >
                        Place order
                      </button>
                    </form>
                  </MDBCol>

                  <CartDetails
                    subTotal={subTotal}
                    totalPrice={totalPrice}
                  ></CartDetails>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CheckOutForm;
