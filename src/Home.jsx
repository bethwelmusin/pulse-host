import React from 'react';
import Navbar from "./Navbar";
import Grid from '@mui/material/Grid2';
import User from './User';

const Home = () => {
  return (
    <>
        <Navbar  />
        <Grid sx={{mt: 4}}>
          <User />
        </Grid>
       
    </>
  );
}

export default Home;
