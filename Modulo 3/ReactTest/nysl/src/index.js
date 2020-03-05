import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import Header from './components/Header';

const container = document.getElementById('root')
const header = document.getElementById('header')
ReactDOM.render(<Test />, container)
ReactDOM.render(<Header />, header)

// ReactDOM.render(__QUE__, __DONDE__);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA