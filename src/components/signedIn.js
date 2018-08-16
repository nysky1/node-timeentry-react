import React from 'react';
import {connect} from 'react-redux';
import './navBar.css';
export default class SignedOut extends React.Component {
    render() {
        return (<li><a href="/logout">Logout</a></li>
        )
    }
}
