import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import Launch from './pages/Launch';
import Auth from './components/Auth';
import RouteConfig from './RouteConfig';
function App() { 


  return (
    <Auth>
      <RouteConfig>
      </RouteConfig>
    </Auth>
  );
}

export default App;