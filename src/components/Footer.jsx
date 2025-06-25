import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Travelly. All rights reserved.</p>
        <small>Crafted with ❤️ for adventure lovers</small>
      </Container>
    </footer>
  );
};

export default Footer;
