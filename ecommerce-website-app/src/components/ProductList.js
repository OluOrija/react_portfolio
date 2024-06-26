import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const products = [
  // Sample products
  { id: 1, name: 'Shampoo', description: 'Great for curly hair', price: 10.99 },
  { id: 2, name: 'Conditioner', description: 'Moisturizing', price: 8.99 },
  // Add more products here
];

const ProductList = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography>{product.description}</Typography>
              <Typography>${product.price.toFixed(2)}</Typography>
              <Button variant="contained" color="primary">
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
