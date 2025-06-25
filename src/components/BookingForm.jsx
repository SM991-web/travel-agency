import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    date: '',
    travelers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    alert('Booking Submitted!');
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Book Your Trip</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group>
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" name="destination" value={formData.destination} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md>
            <Form.Group>
              <Form.Label>Date of Travel</Form.Label>
              <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group>
              <Form.Label>Number of Travelers</Form.Label>
              <Form.Control type="number" name="travelers" value={formData.travelers} onChange={handleChange} min="1" required />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">Submit Booking</Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
