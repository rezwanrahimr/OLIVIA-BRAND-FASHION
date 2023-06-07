import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { ProductCartContext } from "../../context/CartContext";
import { authContext } from "../../context/AuthContext";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transitionID, setTransitionID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(authContext);
  const { finalPrice, cartItems } = useContext(ProductCartContext);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price: finalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [finalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransitionID(paymentIntent.id);

      setSuccess("Congrats! Your payment is completed.");

      // Post data
      const postData = (paymentData) => {
        fetch("http://localhost:5000/paymentProduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };

      const paymentData = cartItems.map((item) => {
        let paymentItems = {
          productName: item.productName,
          UpdatePrice: item.UpdatePrice,
          category: item.category,
          productQuantity: item.productQuantity,
          ProductStock: item.ProductStock,
          ProductPrice: item.ProductPrice,
          ProductImage: item.ProductImage,
          userName: user?.displayName,
          userEmail: user?.email,
          transactionId: paymentIntent.id,
        };
        postData(paymentItems);
      });

      // console.log("paymentData", paymentData);
    }
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-danger pt-1">{cardError}</p>}
      {success && (
        <div className="pt-1">
          <p className="text-success">{success}</p>
          <p>
            Your Transition ID:{" "}
            <span className="text-success">{transitionID}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
