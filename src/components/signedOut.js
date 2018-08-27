import React from 'react';
import {connect} from 'react-redux';
import {
    Link
  } from 'react-router-dom'
import './navBar.css';
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
