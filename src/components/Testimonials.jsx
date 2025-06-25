import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const testimonials = [
  {
    name: "Varan Khan",
    feedback: "Booking through Travelly was the best decision I made. Everything was smooth!",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Shing Joi Len",
    feedback: "The destination suggestions were spot-on! Loved the whole trip.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Ivan Trev",
    feedback: "Affordable pricing and great service. Highly recommend Travelly.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <style>
        {`
          .carousel-indicators {
            opacity: 0 !important;
            pointer-events: none;
          }
        `}
      </style>
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Carousel indicators={true} controls={true} interval={3000}>
        {testimonials.map((t, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex flex-column align-items-center text-center p-4">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle mb-3"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <h5>{t.name}</h5>
              <p className="text-muted fst-italic">"{t.feedback}"</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;