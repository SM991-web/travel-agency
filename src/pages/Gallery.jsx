import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const galleryImages = [
  'https://source.unsplash.com/600x400/?beach',
  'https://source.unsplash.com/600x400/?mountains',
  'https://source.unsplash.com/600x400/?city',
  'https://source.unsplash.com/600x400/?forest',
  'https://source.unsplash.com/600x400/?desert',
  'https://source.unsplash.com/600x400/?ocean',
];

const Gallery = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Travel Gallery</h2>
      <Row>
        {galleryImages.map((img, idx) => (
          <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
            <Image src={img} thumbnail fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
