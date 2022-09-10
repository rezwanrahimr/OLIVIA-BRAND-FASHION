import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ product }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState("");
    const [transitionID, setTransitionID] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { CartProductPrice, CartProductName, userName } = product;


    useEffect(() => {
        fetch('http://localhost:5000/createPayment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ CartProductPrice })
        })
            .then(res => res.json())
            .then(data => {

                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [CartProductPrice])



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
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: CartProductName,
                        email: userName
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);

        }
        else {
            setCardError('');
            setTransitionID(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')
        }

    }

    return (


        <div class="card-body">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-danger pt-1'>{cardError}</p>
            }
            {
                success && <div className='pt-1'>
                    <p className='text-success'>{success}</p>
                    <span className='text-orange-500'>Your Transition ID: {transitionID}</span>
                </div>
            }
        </div>




    );
};

export default CheckoutForm;