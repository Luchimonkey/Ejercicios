import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginGoogle extends Component {
    render(){
        const { user, signOut, signInWithGoogle, signInWithFacebook, signInWithEmail } = this.props;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            } else {
              // No user is signed in.
            }
          });
        return(
            // firebase.auth().onAuthStateChanged(function(user) {
            //     if (user) {
            //     alert('hay un usuario logueado')
            //     } else {
            //     alert('no se logueo ni madres')
            //     }
            // }),
            <div>
                {
                    user 
                    ? <p>Hello, {user.photo}</p>
                    : <p>Please, log in</p>
                }
                {
                    user
                    ? <button onClick={signOut}>Log out</button>
                    : <div><button onClick={signInWithGoogle}>Log in with Google</button>
                    <button onClick={signInWithFacebook}>Log in with Facebook</button>
                    <button onClick={signInWithEmail}>Log In with E-Mail</button></div>
                }
            </div>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
    facebookProvider : new firebase.auth.FacebookAuthProvider(),
    emailProvider : new firebase.auth.EmailAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(LoginGoogle);

//Para que funcione: 
//npm install firebase
//npm install react-with-firebase-auth