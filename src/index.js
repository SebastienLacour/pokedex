import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { LanguageContextProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageContextProvider>
  </React.StrictMode>
);

