import React from 'react';
import {Link} from 'react-router-dom'

export default class SignedOut extends React.Component {
    
    render() {
        return (<div>
            <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
        )
    }
}