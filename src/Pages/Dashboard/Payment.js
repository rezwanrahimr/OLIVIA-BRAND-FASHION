import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Sheard/Loading";
import CheckoutForm from "./CheckoutForm";

// stripe
const stripePromise = loadStripe(
  "pk_test_51L3kgcEqztdnHcgkUsXiWYSY6FbMuSHdZZClWIhjPy0iIImfSHwqB2hvviOxQ007ZVmCehbNoiTgFlb0qnhEpmfb00Ah7bte9H"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://olivia-brand-fashion-backend.vercel.app/card/${id}`;

  const { data: product, isLoading } = useQuery(["card", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>id: {id}</h1>
      <div className="card w-100 d-flex justify-content-center">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
