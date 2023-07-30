import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //厳格モード
  <React.StrictMode>
    <App />
  </React.StrictMode>
);