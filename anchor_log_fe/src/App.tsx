import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Provider } from "./components/ui/provider"

import LoginRegister from './pages/LoginRegister'; 
import Launch from './pages/Launch';

function App() {
  return (
    <Provider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="*" element={<Navigate to="/launch" />} /> 
      </Routes>
    </Router></Provider>
  );
}

export default App;
