// src/components/Newsletter.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed Email:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">Subscribe to Our Newsletter</h2>
      <p>Get travel tips, deals, and destination inspiration in your inbox.</p>
      {submitted && <Alert variant="success">Thank you for subscribing!</Alert>}
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 flex-wrap">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ maxWidth: '300px' }}
        />
        <Button type="submit" variant="primary">Subscribe</Button>
      </Form>
    </Container>
  );
};

export default Newsletter;
