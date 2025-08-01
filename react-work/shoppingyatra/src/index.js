import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import MyStore from "./redux-config/Store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={MyStore}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
