import React from 'react';
import {Link} from 'react-router-dom'

export default class SignedOut extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/login">Login </Link></li>
                    <li><Link to="/register">Sign Up</Link></li>
                </ul>
            </div>
        )
    }
}
