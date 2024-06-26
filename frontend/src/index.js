import React from 'react';
/* React v.18 için */
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* React 18, son sürüm için burası. Bizim kullandığımız versiyon 16 olduğu için yukarıdaki geçerli */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );