// src/components/Cart.js
import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={item.price} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
