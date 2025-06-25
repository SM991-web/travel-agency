import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const packages = [
  {
    title: "Budget Escape",
    price: "₹9,999",
    features: ["2 Nights Stay", "Breakfast Included", "City Tour"],
  },
  {
    title: "Explorer Deal",
    price: "₹19,999",
    features: ["5 Nights Stay", "All Meals", "Guided Tours", "Transport Included"],
  },
  {
    title: "Luxury Retreat",
    price: "₹49,999",
    features: ["7 Nights Stay", "Luxury Hotels", "All-Inclusive", "Private Guide"],
  }
];

const Pricing = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">Travel Packages</h2>
      <Row>
        {packages.map((pkg, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{pkg.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{pkg.price}</Card.Subtitle>
                <ul className="list-unstyled">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
                <Button variant="primary" className="mt-3">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
