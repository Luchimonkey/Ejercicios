import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginGoogle extends Component {
    render(){
        const { user, signOut, signInWithGoogle } = this.props;
        return(
            <div>
                {
                    user 
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please, log in</p>
                }
                {
                    user
                    ? <button onClick={signOut}>Log out</button>
                    : <button onClick={signInWithGoogle}>Log in with Google</button>
                }
            </div>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(LoginGoogle);

//Para que funcione: 
//npm install firebase
//npm install react-with-firebase-auth