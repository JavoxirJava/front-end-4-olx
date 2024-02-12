import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from './components/Product/product';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);