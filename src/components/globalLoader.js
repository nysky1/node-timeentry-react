import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import hasToken from '../helpers/token'
import { fetchUserBasicInfo, resetAlertMessage } from '../actions/';

class GlobalLoader extends React.Component {
    constructor(props) {
        super(props);
        //detects router change and clears uiAlert
        this.props.history.listen((location, action) => {
            this.props.resetAlertMessage();
        });
    }   
    componentDidMount() {
        console.log ('global:' );
        if (hasToken() && !this.props.user.isLoggedIn) {
            console.log('fetching user basic info');
            this.props.fetchUserBasicInfo();
            console.log('reloading global');
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
    user: state.user,
});

export default withRouter(connect(mapStateToProps, { fetchUserBasicInfo, resetAlertMessage })(GlobalLoader));