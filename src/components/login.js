import React from 'react';
import { Link } from 'react-router-dom';
import Register from './register';

export default class Login extends React.Component {
    render() { 
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">Login</h1>
                    <form id="frmLogin">
                        <fieldset>
                            <div className="errorDesc" hidden aria-live="assertive"></div>

                            <input id="username" value="" placeholder="Username" aria-label="Enter a Username" className="text-input" required />
                            <input id="password" type="password" value="" placeholder="Password" aria-label="Enter a Password" className="text-input" required
                            />
                            <button className="btnLogin btnStandard">Login</button>
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
