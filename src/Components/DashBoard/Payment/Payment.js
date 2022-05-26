import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L13LPLKsNmd7UVoqMtpsiqagvkcomS3JdkI81aHJydiDv7RqQleF0gfY61hTO4qDRqC8dSzX0G0M4c9Dgnl6qfU001FZZVtB6');


const Payment = () => {

const {id}= useParams()


const { data: order, isLoading } = useQuery(['booking', id], () => fetch(`https://infinite-river-32307.herokuapp.com/order/${id}`, {
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));

console.log(order);

if (isLoading) {
    return <Loading></Loading>
}



    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Hello {order?.userName}</h2>
                <p>pay for {order?.productName}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">pay {order.price}</button>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;