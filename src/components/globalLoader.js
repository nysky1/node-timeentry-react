import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import hasToken from '../helpers/token'
import {fetchUserBasicInfo, resetAlertMessage } from '../actions/';

class GlobalLoader extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.listen((location, action) => {
            this.props.resetAlertMessage();
        });
    }
    componentDidMount() {
        if (hasToken() && !this.props.user.isLoggedIn) {
            this.props.fetchUserBasicInfo();
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.appState.isFetchingUserBasicInfo ?
                    <React.Fragment>
                        <h2>Loading</h2>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {this.props.children}
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    appState: state.appState,
    user: state.user
});

export default withRouter(connect(mapStateToProps, {fetchUserBasicInfo, resetAlertMessage})(GlobalLoader));