import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <List>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
            <Button onClick={() => handleRemove(index)}>Remove</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;
