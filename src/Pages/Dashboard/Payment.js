import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

// stripe
const stripePromise = loadStripe('pk_test_51L3kgcEqztdnHcgkUsXiWYSY6FbMuSHdZZClWIhjPy0iIImfSHwqB2hvviOxQ007ZVmCehbNoiTgFlb0qnhEpmfb00Ah7bte9H');

const Payment = () => {
    const { id } = useParams();
    const [productInfo,setProductInfo] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/payment/${id}`)
        .then(res => res.json())
        .then(data => setProductInfo(data))
    },[id])
    console.log(productInfo);
    return (
        <div>
            <h1>id: {id}</h1>
            <div class="card w-100 d-flex justify-content-center">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm productInfo={productInfo} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;