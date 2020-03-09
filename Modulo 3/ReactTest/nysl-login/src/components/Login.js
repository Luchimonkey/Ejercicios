import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth'

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
    handleSubmit(event) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        E-Mail:
                        <input type="email" placeholder="Your e-mail here..." value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="Your password here..." value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login