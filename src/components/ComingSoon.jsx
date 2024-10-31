import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, IconButton, Grid, Paper, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email } from '@mui/icons-material';
import YourImage from '../assets/DJI_00401644751471329.jpg';
import './ComingSoon.css';

const ComingSoon = () => {
  const launchDate = new Date('2024-11-10T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +launchDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        Days: 0,
        Hours: 0,
        Minutes: 0,
        Seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <Paper key={interval} className="time-segment">
      <Typography variant="h4" className="time-number">
        {timeLeft[interval]}
      </Typography>
      <Typography variant="subtitle1" className="time-label">
        {interval}
      </Typography>
    </Paper>
  ));

  return (
    <Box className="coming-soon-container">
      <img src={YourImage} alt="Company Illustration" className="background-image" />
      <Box className="overlay">
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom className="company-title">
            Innovadaisolutions
          </Typography>
          <Typography variant="h6" gutterBottom className="company-description">
            Innovadaisolutions is dedicated to providing cutting-edge AI solutions that address both known and emerging challenges faced by individuals and businesses. Our mission is to empower you with innovative tools and services to drive success and efficiency.
          </Typography>

          <Box className="countdown-timer" mt={4} mb={4}>
            <Grid container spacing={2} justifyContent="center">
              {timerComponents.length ? timerComponents : <span>We have launched!</span>}
            </Grid>
          </Box>

          <Typography variant="h5" gutterBottom className="launching-soon-text">
            Launching Soon!
          </Typography>

          <Box className="social-media-buttons" mt={2}>
            <IconButton
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Instagram fontSize="large" />
            </IconButton>
          </Box>

          <Box className="email-button" mt={4}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Email />}
              href="mailto:innovadaisolutions@gmail.com"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ComingSoon;
