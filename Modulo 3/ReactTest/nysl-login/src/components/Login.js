import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth'
// import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth'
import firebaseConfig from '../firebase';
import { preloadUser } from 'reactfire';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit = async event => {
        event.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        this.props.history.push("/");
        } catch(error){
            alert(error)
        }
    }
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
            
            <div>
                {
                user 
                ? <h1>Hello, {user.displayName}</h1>
                : <div><h1>Please, log in</h1><form onSubmit={this.handleSubmit}>
                    <label>
                        E-Mail:
                        <input type="email" placeholder="Your e-mail here..." value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="Your password here..." value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form></div>
            }
                
            
            
            {
                user
                ? <button onClick={signOut}>Log out</button>
                : <div><button onClick={signInWithGoogle}>Log in with Google</button>
                <button onClick={signInWithFacebook}>Log in with Facebook</button></div>
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
})(Login);

// export default Login