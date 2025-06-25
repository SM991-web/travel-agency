import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const services = [
  {
    title: "Flight Booking",
    description: "Book domestic and international flights at the best prices.",
    icon: "✈️"
  },
  {
    title: "Hotel Reservation",
    description: "Comfortable and affordable stays across all destinations.",
    icon: "🏨"
  },
  {
    title: "Tour Packages",
    description: "Customizable packages for family, honeymoon, or adventure.",
    icon: "🌄"
  }
];

const Services = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <Row>
      {services.map((service, idx) => (
        <Col key={idx} md={4} className="mb-4">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div style={{ fontSize: '2rem' }}>{service.icon}</div>
              <Card.Title className="mt-3">{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Services;
