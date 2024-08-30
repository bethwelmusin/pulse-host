import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { useFormik } from "formik";
import * as yup from "yup";



const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [csvFile, setCsvFile] = useState(null);

  const formik = useFormik({
    initialValues: {
        fullName: "",
      phone_number: "",
      email: "",
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
    validationSchema: yup.object({
      email: yup.string().email().required(),
      fullName: yup.string().required(),
      phone_number: yup.string().required(),

    }),
  });

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };



  const handleSubmit = async (e) => {

    e.preventDefault();
    
    try {
    
    const response = await axios.post(`/`, formData);
    
    console.log( response.data);
    
    } catch (error) {
    
    console.error( error);
    
    }
    
    };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flexGrow: 1,
        margin: '0 auto',
        boxShadow: 3,
        backgroundColor: '#fff',
        maxWidth: 600,
        padding: '20px',
        borderRadius: '12px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your first and last name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@doe.com"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="### ### ####"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            component="label"
            fullWidth
          >
            Upload File
            <input
              type="file"
              hidden
              accept=".csv"
              onChange={handleFileChange}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
