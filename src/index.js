import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // If you're using global CSS
import App from './App';  // Import the App component

// Render the app to the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Call the App component here */}
  </React.StrictMode>
);
