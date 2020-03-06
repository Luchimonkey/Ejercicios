import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Register extends Component {
    render(){
        return(
            <form>
                <div>
                    <input type="email">
                        <label>Your Email</label>
                    </input>
                    <input type="password">
                        <label>Your password</label>
                    </input>
                </div>
            </form>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth().createUserWithEmailAndPassword()

export default Register

// register(evt) {
//     this.trigger = "";
//         if (this.email && this.password) {
//             firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
//                 this.email = "";
//                 this.password = "";
//                 console.log(user);
//                 alert("Usuario registrado correctamente");
//             }).catch(err => {
//                 this.error = err.message;
//             });
//         } else {
//             this.trigger = "Todos los campos son requeridos";
//         }
//         evt.preventDefault()
//         router.push({
//             name: 'RoomList',
//             params: { nickname: this.log.nickname }
//         })
//     }