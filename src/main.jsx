import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './question4/App';
import './index.css';
import ColorProvider from './context/ColorContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);
