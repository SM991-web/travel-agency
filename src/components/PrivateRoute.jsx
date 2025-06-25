import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
