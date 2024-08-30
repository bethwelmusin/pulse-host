import React from 'react';
import Navbar from "./Navbar";
import Grid from '@mui/material/Grid2';
import ContactForm from "./ContactForm"


const Home = () => {
  return (
    <>
        <Navbar  />
        <Grid sx={{mt: 10}}>
          <ContactForm />
        </Grid>
       
    </>
  );
}

export default Home;
