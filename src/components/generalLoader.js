import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { resetAlertMessage } from '../actions/';
import './generalLoader.css';

class GeneralLoader extends React.Component {
    constructor(props) {
        super(props);

        //detects router change and clears uiAlert
        this.props.history.listen((location, action) => {
            this.props.resetAlertMessage();
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.props.appState.isFetchingGlobal &&
                    <React.Fragment>
                        <div className="loading style-2"><div className="loading-wheel"></div></div>
                    </React.Fragment>
                }
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    appState: state.appState,
    user: state.user
});

export default withRouter(connect(mapStateToProps, { resetAlertMessage })(GeneralLoader));