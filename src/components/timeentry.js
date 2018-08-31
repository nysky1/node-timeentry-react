import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Login from './login';
import GlobalLoader from './globalLoader';
import Dashboard from './dashboard';
import Register from './register';
import PrivateRoute from './privateRoute';
import Activities from './activities';
import NewActivity from './activity_new';
import ActivityEdit from './activity_edit';


export class TimeEntry extends React.Component  {

    render() {
        return (    
            <React.Fragment>
                <Switch>
                    <GlobalLoader>
                    {/* <GeneralLoader> */}
                        <NavBar isAuth={this.props.user.isLoggedIn} />
                        <main>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                                <PrivateRoute exact path="/activities" component={Activities}  />
                                <PrivateRoute exact path="/activity_new" component={NewActivity} />
                                <PrivateRoute exact path="/activity_edit/:eventId" component={ActivityEdit} />
                            </Switch>
                        </main>
                        {/* </GeneralLoader> */}
                    </GlobalLoader>
                </Switch>
            </React.Fragment>   
            )
    }
}

const mapStateToProps = state => ({
    appState: state.appState,
    user: state.user,
});

//https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md#blocked-updates
export default withRouter(connect(mapStateToProps)(TimeEntry));