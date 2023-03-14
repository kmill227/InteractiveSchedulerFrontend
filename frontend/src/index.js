import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calendar from './Calendar';
import Navbar from './Navbar'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


const calendar = ReactDOM.createRoot(document.getElementById('calendar'));
calendar.render(
  <div class="row">
    <div class="col-md-4">
      <Navbar />
    </div>
    <div class="col-md-8">
      <Calendar />
    </div>
  </div>
);

/*
const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();