import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

export default class Register extends React.Component {
    render() {
        return (
            <main role="main">
                <div className="mainBox">
                    <div className="mainInnerBox noTop">
                        <h1 className="mainInnerBoxHeader">Create Your Account</h1>
                        <form id="frmSignUp">
                            <fieldset>
                                <div className="errorDesc" hidden aria-live="assertive"></div>
                                <div className="divFirstName">
                                    <input id="firstName" value="" placeholder="First Name" aria-label="Enter your First Name" className="text-input" required />
                                </div>
                                <div className="divSpacer">&nbsp;</div>
                                <div className="divLastName">
                                    <input id="lastName" value="" placeholder="Last Name" aria-label="Enter your Last Name" className="text-input" required />
                                </div>
                                <input id="email" value="" placeholder="Email Address" aria-label="Enter your Email Address" className="text-input" required
                                />
                                <input id="username" value="" placeholder="Username" aria-label="Enter a Username" className="text-input" required />
                                <input id="password" type="password" value="" placeholder="Password" aria-label="Enter a Password" className="text-input" required
                                />
                                <button className="btnRegister btnStandard">Register</button>
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