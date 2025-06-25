import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I book a trip?</Accordion.Header>
          <Accordion.Body>
            You can book a trip by filling out the booking form on our homepage or contacting us directly.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I customize my travel plan?</Accordion.Header>
          <Accordion.Body>
            Absolutely! We offer personalized itineraries to suit your needs and preferences.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What if I need to cancel my booking?</Accordion.Header>
          <Accordion.Body>
            You can cancel up to 7 days before your travel date for a full refund. Please refer to our cancellation policy.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
