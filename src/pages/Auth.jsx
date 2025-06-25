import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";


const Auth = () => {
  const navigate = useNavigate(); // ✅ moved inside the component
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", username: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const { email, password, username } = form;

  if (isLogin) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful!");
        navigate("/dashboard");
      })
      .catch((error) => alert(error.message));
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // ✅ Set displayName after successful sign-up
        return updateProfile(userCredential.user, {
          displayName: username,
        });
      })
      .then(() => {
        alert("Account created successfully!");
        navigate("/dashboard");
      })
      .catch((error) => alert(error.message));
  }
};


  return (
    <Container className="py-5 d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100" style={{ maxWidth: "400px" }}>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <h3 className="text-center mb-4">
                {isLogin ? "Login" : "Sign Up"}
              </h3>
              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                  />
                </Form.Group>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100 mb-3">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </Form>
              <div className="text-center">
                <small>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <span
                    style={{ cursor: "pointer", color: "#0d6efd", marginLeft: 5 }}
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Sign up" : "Login"}
                  </span>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
