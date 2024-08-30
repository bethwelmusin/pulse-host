// src/App.js

import React from 'react';
import { Container, Box, Typography, Button, Card, CardContent } from '@mui/material';

const User = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            RSVP
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            for
          </Typography>
          <Typography variant="h4" component="div" fontWeight="bold">
            Pulse Awards 2024
          </Typography>

          <Box sx={{ mt: 3, mb: 3 }}>
            <hr />
            <Typography variant="h6" component="div">
              The Details
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sat Oct 9, 2024 2:00 PM - 10:00 PM EAT
            </Typography>
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
              Awards Ceremony & Reception
            </Typography>
            <Typography variant="body1" color="text.secondary">
              TBD
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Nairobi, Kenya
            </Typography>
            <hr />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
            <Button variant="contained" color="success"   sx={{ 
    width: '48%',  
    backgroundColor: '#1976D2', 
    color: 'white' 
  }}>
              Accept
            </Button>
            <Button variant="contained" color="error" sx={{ width: '45%' }}>
              Regret
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default User;
