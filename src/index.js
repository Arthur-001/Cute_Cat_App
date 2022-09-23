import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from "./Hello"; // I added
import "tachyons"; // I added
import reportWebVitals from './Defaults/reportWebVitals';
// import Card from './Robot_Card';
// import { robots } from './robots'; //! because robots is exported normally not by default we have to use jsx syntax that is {} and we put it inside brackets
import CatApp from './Containers/CuteCatPageApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello some_property_for_Hello={'Here the Dragon Warrior enters'}/> */}
    {/* <App /> */}
    <CatApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();