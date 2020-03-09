import React from 'react';
import ReactDOM from 'react-dom';
import LoginGoogle from './components/LoginGoogle';
import Login from './components/Login';
import Register from './components/Register';

const container = document.getElementById('root');
const container2 = document.getElementById('root2');
const container3 = document.getElementById('root3');

ReactDOM.render(<LoginGoogle />, container);
ReactDOM.render(<Login />, container2);
ReactDOM.render(<Register />, container3);
// ReactDOM.render(__QUE__, __DONDE__);

//https://firebase.google.com/docs/reference/js/firebase.auth.Auth?hl=es#createUserWithEmailAndPassword
//https://firebase.google.com/docs/auth/web/password-auth?hl=es