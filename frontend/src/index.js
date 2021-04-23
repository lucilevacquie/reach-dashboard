import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginProvider from "./loginProvider";
import RegisterProvider from "./registerProvider";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

