import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Login from './login';
import Register from './register';

export default function TimeEntry() {
    return (
        <Router>
            <div>
                <NavBar />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

