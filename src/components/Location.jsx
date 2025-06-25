import React from 'react';
import { Container } from 'react-bootstrap';

const Location = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Find Us Here</h2>
      <div className="d-flex justify-content-center">
        <iframe
          title="Travelly Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092234019057!2d144.95592821564386!3d-37.8172099797515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f14ef1e7%3A0x2f14e4e9c3c2c0!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1618882962026!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </Container>
  );
};

export default Location;
