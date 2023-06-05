import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import CheckoutForm from "./CheckoutForm";

// stripe
const stripePromise = loadStripe(
  "pk_test_51NCmi9Eoj2AIBseDulGKDp7qozcI4GIRDFEpVV7XLoPpf6wUPMO4ItgU0ImN7ACnKGJr2w3CTviKYVndBXBmtHji00x0o9T3pJ"
);

const Payment = () => {
  return (
    <div style={{ marginTop: "85px" }}>
      <div className="card w-100 d-flex justify-content-center">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
