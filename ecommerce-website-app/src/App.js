// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import theme from './theme';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';

// Load your Stripe public key
const stripePromise = loadStripe('***REPLACE_WITH_STRIPE_PUBLIC_KEY***');

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header cartItemCount={cartItems.length} />
      <div>
        <ProductList onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </ThemeProvider>
  );
}

export default App;
