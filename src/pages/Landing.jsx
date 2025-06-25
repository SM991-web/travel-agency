import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 text-center">
      <h1>Welcome to Travelly</h1>
      <p>Explore the world with ease.</p>
      <Button variant="primary" onClick={() => navigate('/home')}>
        Enter Website
      </Button>
    </Container>
  );
};

export default Landing;
