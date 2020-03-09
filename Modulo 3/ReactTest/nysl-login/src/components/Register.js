import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullName: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    handleNameChange(event) {
        this.setState({fullName: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit(event) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too short.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Full Name:
                        <input type="text" placeholder="Your full name here..." value={this.state.fullName} onChange={this.handleNameChange} />
                    </label>
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

export default Register