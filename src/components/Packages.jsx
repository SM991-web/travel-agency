import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const packages = [
  {
    title: "Romantic Paris Getaway",
    price: "75,000",
    description: "5 days, 4 nights with luxury hotel stay and city tour.",
    image: "https://source.unsplash.com/400x300/?paris,romantic"
  },
  {
    title: "Bali Adventure",
    price: "55,000",
    description: "7 days of tropical beaches, surfing, and jungle trekking.",
    image: "https://source.unsplash.com/400x300/?bali,adventure"
  },
  {
    title: "New York City Explorer",
    price: "90,000",
    description: "Explore NYC with city passes and museum entries included.",
    image: "https://source.unsplash.com/400x300/?newyork,travel"
  },
  {
    title: 'Beach Escape',
    price: '$299',
    duration: '3 Days, 2 Nights',
    features: ['Ocean-view hotel', 'Breakfast included', 'Guided tours'],
    image: 'https://source.unsplash.com/600x400/?beach,resort'
  },
  {
    title: 'Mountain Adventure',
    price: '$399',
    duration: '4 Days, 3 Nights',
    features: ['Trekking', 'Campfire', 'Local sightseeing'],
    image: 'https://source.unsplash.com/600x400/?mountains,travel'
  },
  {
    title: 'City Lights',
    price: '$499',
    duration: '5 Days, 4 Nights',
    features: ['Luxury stay', 'Shopping tour', 'Nightlife experience'],
    image: 'https://source.unsplash.com/600x400/?city,tourism'
  }
];

const Packages = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Travel Packages</h2>
      <Row>
        {packages.map((pkg, index) => (
          <Col md={4} key={index} className="mb-4">
        <Card className="h-100 d-flex flex-column justify-content-between">
            <Card.Img variant="top" src={pkg.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{pkg.title}</Card.Title>
                <Card.Text>{pkg.description}</Card.Text>
                <div className="mt-auto">
                <h5 className="text-primary fw-bold">₹{pkg.price.toLocaleString()}</h5>
                <Button variant="success">Book Now</Button>
                </div>
            </Card.Body>
        </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;
