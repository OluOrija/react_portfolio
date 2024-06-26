// src/components/ProductList.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  // Add more products as needed
];

const ProductList = ({ onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">{product.price}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
