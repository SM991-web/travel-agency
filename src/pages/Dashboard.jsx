import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import BookNow from "./BookNow";

const Dashboard = () => {
  const { currentUser, logout } = useAuth(); // ✅ included logout
  const navigate = useNavigate(); // ✅ for redirect after logout
  const [showBookingForm, setShowBookingForm] = useState(false);
  const displayName = currentUser?.displayName || "Traveler";
  const email = currentUser?.email || "N/A";
  const joined = currentUser?.metadata?.creationTime || "N/A";

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      alert("Logout failed: " + err.message);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Welcome, {displayName} 👋</h2>

      {/* Profile Overview */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title className="text-center">👤 Profile Overview</Card.Title>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Joined:</strong> {joined}</p>

          <div className="text-center mt-4">
            <h5 className="mb-3">✈️ Book a New Trip</h5>

            {!showBookingForm ? (
              <Button
                variant="success"
                size="sm"
                onClick={() => setShowBookingForm(true)}
              >
                Book My Trip
              </Button>
            ) : (
              <div className="position-relative mt-3">
                <div
                  onClick={() => setShowBookingForm(false)}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#dc3545",
                    padding: "10px",
                  }}
                >
                  ❌
                </div>
                <BookNow />
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      <Row>
        {/* My Bookings */}
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>🧳 My Bookings</Card.Title>
              <p>No upcoming bookings.</p>
              <Button variant="primary">View All</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Wishlist */}
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>❤️ Wishlist</Card.Title>
              <p>You haven't saved any trips yet.</p>
              <Button variant="primary">Browse Destinations</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Payment */}
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>💳 Payment Methods</Card.Title>
              <p>No cards saved.</p>
              <Button variant="secondary">Add Payment Method</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Settings */}
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>⚙️ Settings</Card.Title>
              <Button variant="outline-primary">Update Profile</Button>{' '}
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
