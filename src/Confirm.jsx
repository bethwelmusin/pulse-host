import React from 'react';
import { Box, Typography, Button, Paper, Divider } from '@mui/material';
import Navbar from "./Navbar"


const Confirmation = () => {
  return (
    <div>
      <Navbar />
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper
        elevation={3}
        sx={{
          padding: '40px', // Increased padding
          borderRadius: '16px', // Slightly increased border radius
          textAlign: 'center',
          maxWidth: '700px', // Increased maxWidth for a larger card
          width: '100%', // Ensures the card takes the full width within the maxWidth constraint
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Pulse Awards 2024
        </Typography>
        <Divider sx={{ marginY: 3 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          John Doe
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Guest
        </Typography>
        <Divider sx={{ marginY: 3 }} />
        <Box display="flex" justifyContent="space-between" marginTop={3}>
          <Button variant="contained"    
          sx={{ 
          width: '48%',  
          backgroundColor: '#1976D2', 
          color: 'white' 
        }}>
            Admit
          </Button>
          <Button variant="contained" color="error" sx={{ width: '48%' }}>
            Deny
          </Button>
        </Box>
      </Paper>
    </Box>
      
    </div>
  );
}

export default Confirmation;


