import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

function NavigationBar() {
  const [hoverText, setHoverText] = useState('Login');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Travelly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flexq align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
            {currentUser ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <div
                  onClick={handleLogout}
                  style={{
                    borderRadius: "50%",
                    padding: "10px",
                    marginLeft: "15px",
                    cursor: "pointer",
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "2px solid white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="Logout"
                >
                  {currentUser?.displayName?.charAt(0)?.toUpperCase() || "U"}
                </div>
              </>
            ) : (
              <div
                onMouseEnter={() => setHoverText('Signup')}
                onMouseLeave={() => setHoverText('Login')}
                onClick={() => navigate('/auth')}
                style={{
                  borderRadius: "8px",
                  padding: "6px 12px",
                  marginLeft: "15px",
                  cursor: "pointer",
                  width: "80px",
                  textAlign: "center",
                  transition: "all 0.5s ease-in-out",
                  backgroundColor: hoverText === "Signup" ? "#000000" : "#ffffff",
                  color: hoverText === "Signup" ? "#ffffff" : "#000000",
                  border: "1px solid white"
                }}
              >
                {hoverText}
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
