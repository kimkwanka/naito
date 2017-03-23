/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as io from 'socket.io-client';
var socket = io();
socket.on('connect', function(){
  console.log('connect');
  
});

import css from '../stylus/style.styl';

const render = (Component) => {
  ReactDOM.render(
    <Component />
  ,
document.getElementById('app'));
};

render(App);

// Handle hot module replacement
if ((process.env.NODE_ENV !== 'production') && module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
