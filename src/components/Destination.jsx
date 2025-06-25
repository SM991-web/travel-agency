import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const destinations = [
  {
    title: "Paris",
    rating: "4.8",
    description: "City of lights and love. Perfect for romantic trips.",
    image: "https://source.unsplash.com/400x300/?paris"
  },
  {
    title: "Bali",
    rating: "4.6",
    description: "Tropical paradise with serene beaches and culture.",
    image: "https://source.unsplash.com/400x300/?bali"
  },
  {
    title: "New York",
    rating: "4.9",
    description: "The city that never sleeps. Full of energy and sights.",
    image: "https://source.unsplash.com/400x300/?newyork"
  }
];

const Destinations = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Destinations</h2>
      <Row>
        {destinations.map((dest, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={dest.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{dest.title}</Card.Title>
                <Card.Text>⭐ {dest.rating}</Card.Text> {/* Add your rating here */}
                <Card.Text>{dest.description}</Card.Text>
                {/* <div className="mt-auto">
                  <Button variant="primary">Explore</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destinations;
