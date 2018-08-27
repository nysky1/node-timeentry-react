import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {createUser} from '../actions/index';
import Alert from './alert';
import './register.css';

export class Register extends React.Component {
    onSubmit(values) {   
        const username = values.username;
        const email = values.email;
        const pwd = values.password;
        const fName = values.firstName;
        const lName = values.lastName;
        this.props.createUser(fName,lName,email,username,pwd);
    }
    render() {
        return (
            <main role="main">
                <div className="mainBox">
                    <div className="mainInnerBox noTop">
                        <h1 className="mainInnerBoxHeader">Create Your Account</h1>
                        <form id="frmSignUp" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} method="post" >
                            <fieldset>
                                <Alert uiAlert={this.props.uiAlert}   />
                                <div className="divFirstName">
                                <Field component={Input}
                                  name="firstName" type="text" value="" placeholder="First Name" aria-label="Enter your First Name" className="text-input" 
                                />
                                </div>
                                <div className="divSpacer">&nbsp;</div>
                                <div className="divLastName">
                                <Field component={Input}
                                  name="lastName" type="text" value="" placeholder="Last Name" aria-label="Enter your Last Name" className="text-input" 
                                />
                                </div>
                                <Field component={Input}
                                  name="email" type="text" value="" placeholder="Email Address" aria-label="Enter your Email Address" className="text-input" 
                                />          
                                <Field component={Input}
                                  name="username" type="text" value="" placeholder="Username" aria-label="Enter a Username" className="text-input" 
                                />
                                <Field component={Input}
                                  name="password" type="password" value="" placeholder="Password" aria-label="Enter a Password" className="text-input" 
                                />          
                                <input type="submit" className="btnRegister btnStandard" value="Register" />
                            </fieldset>
                        </form>
                        <div className="lnkBack">
                            <a href="/login" aria-label="Click to sign in">Already have an account?</a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    uiAlert: state.appState
});

export default reduxForm({
    form: 'Register',
})(connect(mapStateToProps, {createUser})(Register));