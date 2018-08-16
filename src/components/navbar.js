import React from 'react';
import {connect} from 'react-redux';
import SignedOut from './signedOut';

import './navBar.css';
export class NavBar extends React.Component {
    
    render() {
        return (<header role="banner">
            <div className="logo">
            VolunteerTrack
            </div>
        
            <div className="menu">
                <ul>
                    <SignedOut />
                </ul>
            </div>
        </header>)
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);