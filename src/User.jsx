import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Card, CardContent } from "@mui/material";
import Navbar from "./Navbar";
import axios from "axios";
import api from "./api/api";

const Confirmation = () => {
  const [rsvpDetails, setRsvpDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchRsvpDetails = async () => {
  //   try {
  //     const response = await api.get("/api/rsvp-details"); // Adjust the endpoint accordingly
  //     setRsvpDetails(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError("Failed to fetch RSVP details");
  //     setLoading(false);
  //   }
  // };

  // const submitRsvp = async (response) => {
  //   try { 
  //     const result = await api.post("/api/submit-rsvp", { response });
  //     alert("RSVP submitted successfully!");
  //   } catch (err) {
  //     alert("Failed to submit RSVP");
  //   }
  // };

  // useEffect(() => {
  //   fetchRsvpDetails();
  // }, []);

  // if (loading) {
  //   return <Typography variant="h6">Loading...</Typography>;
  // }

  // if (error) {
  //   return <Typography variant="h6" color="error">{error}</Typography>;
  // }

  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 400,
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center"
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

            <Box sx={{ mt: 1, mb: 3 }}>
              <hr />
              <Typography variant="h6" component="div">
                The Details
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {/* {rsvpDetails.date} {rsvpDetails.time} */}
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                Awards Ceremony & Reception
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {/* {rsvpDetails.venue || "TBD"} */}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {/* {rsvpDetails.location || "Nairobi, Kenya"} */}
              </Typography>
              <hr />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  width: "48%",
                  backgroundColor: "#1976D2",
                  color: "white"
                }}
                onClick={() => submitRsvp("accept")}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ width: "45%" }}
                onClick={() => submitRsvp("regret")}
              >
                Reject
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Confirmation;
