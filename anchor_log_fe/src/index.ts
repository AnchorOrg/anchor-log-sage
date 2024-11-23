import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure App is a default export from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
     App()
  );
}　
