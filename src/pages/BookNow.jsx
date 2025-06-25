// src/pages/BookNow.jsx
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const BookNow = () => {
  const { currentUser } = useAuth();
  const [form, setForm] = useState({ destination: "", date: "", time: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), {
        ...form,
        userId: currentUser.uid,
        userEmail: currentUser.email,
        createdAt: Timestamp.now(),
      });
      alert("Booking submitted successfully!");
      setForm({ destination: "", date: "", time: "" });
    } catch (err) {
      alert("Booking failed: " + err.message);
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Book Your Trip</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Time</Form.Label>
            <Form.Control
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Book Now
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default BookNow;
