import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 


const Auth = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const isAuthenticated = checkAuthentication();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/sign-in');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Optionally render a loader or placeholder
  }

  return <>{children}</>;
};

function checkAuthentication(): boolean {
  // Replace this logic with your actual session/authentication check
  const token = localStorage.getItem('authToken'); // Example using localStorage
  return Boolean(token);
}

export default Auth;