import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // optional: global CSS
import App from './App';

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the <App /> component into #root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);