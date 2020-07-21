import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Loading from './Loading';
import Project from './Project';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <Project />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
