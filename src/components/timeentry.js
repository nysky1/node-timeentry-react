import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import NavBar from './navbar';

export default function TimeEntry() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <main>
                
                    </main>
                </div>
            </Router>
        )
}

