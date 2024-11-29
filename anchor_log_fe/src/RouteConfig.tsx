import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

interface RouteDefinition {
  path: string;
  element: React.ReactNode;
  isProtected?: boolean; // Optional: If you want to handle protected routes
  redirectTo?: string;   // Optional: If redirection is required for this route
}

interface RouteConfigProps {
  routes: RouteDefinition[]; // External route definitions
  going?: string;     // Default route for undefined paths
}

const RouteConfig: React.FC<RouteConfigProps> = ({   going = '/home' }) => {
  const routes: RouteDefinition[] = [];
  return (  
    <BrowserRouter>
      <Routes>
        

        {/* Handle undefined paths by redirecting to the default route */}
        <Route path="*" element={<Navigate to={going} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;