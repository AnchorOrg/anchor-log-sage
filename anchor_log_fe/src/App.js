import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from './pages/Login'; 
import Launch from './pages/Launch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="*" element={<Navigate to="/launch" />} /> 
      </Routes>
    </Router>
  );
}

export default App;
