import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {createUser} from '../actions/index';
import { required, nonEmpty, email } from './validators';
import Alert from './alert';
import './register.css';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }
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
                                <Field component={Input} validate={[required, nonEmpty]}
                                  name="firstName" type="text" value="" placeholder="First Name" aria-label="Enter your First Name" className="text-input" 
                                />
                                </div>
                                <div className="divSpacer">&nbsp;</div>
                                <div className="divLastName">
                                <Field component={Input} validate={[required, nonEmpty]}
                                  name="lastName" type="text" value="" placeholder="Last Name" aria-label="Enter your Last Name" className="text-input" 
                                />
                                </div>
                                <Field component={Input} validate={[required, nonEmpty, email]}
                                  name="email" type="text" value="" placeholder="Email Address" aria-label="Enter your Email Address" className="text-input" 
                                />          
                                <Field component={Input} validate={[required, nonEmpty]}
                                  name="username" type="text" value="" placeholder="Username" aria-label="Enter a Username" className="text-input" 
                                />
                                <Field component={Input} validate={[required, nonEmpty]}
                                  name="password" type="password" value="" placeholder="Password" aria-label="Enter a Password" className="text-input" 
                                />          
                                <input type="submit" className="btnRegister btnStandard" value="Register" />
                            </fieldset>
                        </form>
                        <div className="lnkBack">
                            <Link to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
let InitializeForm = reduxForm({
    form: 'Register',
    enableReinitialize: true, //essential so that if back is used will refill
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('Register', Object.keys(errors)[0]))
})(Register)

InitializeForm = connect(state => ({
    initialValues: state.appState,
    uiAlert: state.appState
}), { createUser})(InitializeForm)

export default InitializeForm;