import React from 'react';
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';
import Destinations from '../components/Destination';
import Testimonials from '../components/Testimonials';
import Gallery from '../pages/Gallery'; 
import Packages from '../components/Packages';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Newsletter from '../components/Newsletter';
import Pricing from '../components/Pricing';
import Location from '../components/Location';


const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1200x400/?travel,beach"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Discover New Destinations</h3>
            <p>Start your journey with Travelly today!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1200x400/?mountains,adventure"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Adventure Awaits</h3>
            <p>Find your thrill in the world’s hidden gems.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1200x400/?city,night"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Urban Escapes</h3>
            <p>Enjoy the vibe of top global cities.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5 text-center">
        <h1>Explore the World with <span style={{ color: '#0d6efd' }}>Travelly</span></h1>
        <p className="lead">Book your next adventure with us and enjoy exclusive deals!</p>
        
        
        <Destinations />
        <Gallery />
        <Pricing />
        <Services />
        <Testimonials />
        <Packages />
        <BookingForm />
        <Newsletter />
        <Location />
        <Faq />
        
      </Container>
    </>
  );
};

export default Home;  // ✅ This line was missing
