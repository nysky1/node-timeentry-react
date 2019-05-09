import React from 'react';
import SignedOut from './signedOut';
import SignedIn from './signedIn';

import './navBar.css';
export default class NavBar extends React.Component {
    render() {
        if (this.props.isAuth) {
            return (
                <header role="banner">
                    <div className="logo">
                        VolunteerTrack
                    </div>
                    <div className="menu">
                        <ul>
                            <SignedIn />
                        </ul>
                    </div>
                </header>)
        }
        else {
            return (
                <header role="banner">
                    <div className="logo">
                        VolunteerTrack
                    </div>
                    <div className="menu">
                        <ul>
                            <SignedOut />
                        </ul>
                    </div>
                </header>
            )
        }
    }
}
