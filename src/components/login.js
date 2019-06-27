import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { fetchUserLogin } from '../actions/index';
import Alert from './alert';
import './login.css';
import { required, nonEmpty } from './validators';

export class Login extends React.Component {
    onSubmit(values) {
        const username = values.username;
        const pwd = values.password;
        this.props.fetchUserLogin(username, pwd);
    }
    render() {
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">Login</h1>
                    <form id="frmLogin" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} method="post" >
                        <fieldset>
                            <Alert uiAlert={this.props.uiAlert} />
                            <Field component={Input}
                                name="username" validate={[required, nonEmpty]} type="text" value="" placeholder="Username" aria-label="Enter a Username" className="text-input"
                            />
                            <Field component={Input}
                                name="password" validate={[required, nonEmpty]} type="password" value="" placeholder="Password" aria-label="Enter a Password" className="text-input"
                            />
                            <input type="submit" name="login" value="Login" className="btnLogin btnStandard" />
                        </fieldset>
                    </form>
                    <div className="lnkBack">
                        <Link to="/register">Need an account?</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    uiAlert: state.appState
});

export default reduxForm({
    form: 'Login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('Login', Object.keys(errors)[0]))
})(connect(mapStateToProps, { fetchUserLogin })(Login));