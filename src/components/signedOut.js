import React from 'react';
import {connect} from 'react-redux';
import './navBar.css';
export default class SignedOut extends React.Component {
    render() {
        return (
            <div>
                <li><a href="/login">Login |</a></li>
                <li><a href="/register">Sign Up</a></li>
            </div>
        )
    }
}
