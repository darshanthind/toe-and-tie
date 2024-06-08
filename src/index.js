import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './workpages/practice1';
import Login from './workpages/login_page';
import Com from './pratice';
import Counter from './pratice';
import Formvalidation from './practice';
import Home from './workpages/home_page';
import Headeres from './workpages/header';
import Apps from './workpages/validtion';
import Sigup from './workpages/form';
import P from './workpages/p';
import Simple from './workpages/simple';
import HomeBlog from './blo_nav';
import HomeGame from './game_page/start';
import Booking from './booking/Booking';
import { Componentone } from './game_page/k';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Apps/> */}
    {/* <Simple/> */}
    {/* <HomeGame /> */}
    <Componentone />
    {/* <Booking/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
