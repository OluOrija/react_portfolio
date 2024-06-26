import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@mui/material';

const stripePromise = loadStripe('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');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Payment Method:', paymentMethod);
      // Handle payment submission to your backend here
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
        Pay
      </Button>
    </form>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
