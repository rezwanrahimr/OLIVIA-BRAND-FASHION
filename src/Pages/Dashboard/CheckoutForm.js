import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ product }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState("");
    const [transitionID, setTransitionID] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const {_id, CartProductPrice, CartProductName, userName } = product;


    useEffect(() => {
        fetch('https://pacific-journey-95029.herokuapp.com/createPayment', {
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

            const payment = {
                card: _id,
                transationId: paymentIntent.id
            }
            fetch(`https://pacific-journey-95029.herokuapp.com/card/${_id}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                    console.log(data)
            })
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
                   <p>Your Transition ID: <span className='text-success'>{transitionID}</span></p>
                </div>
            }
        </div>




    );
};

export default CheckoutForm;