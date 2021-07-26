import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Introductie from './Introductie';
import ListAndKeys from './ListAndKeys';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Introductie /> */}
    <ListAndKeys />
  </React.StrictMode>,
  document.getElementById('root')
);