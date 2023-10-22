import React from 'react';
import { Card as MaterialUICard, CardContent, Typography, CardActions, Button } from '@mui/material';

const Card = ({ title, content }) => (
  <MaterialUICard>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </MaterialUICard>
);

export default Card;