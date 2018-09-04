import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import hasToken from '../helpers/token'
import { fetchUserBasicInfo, resetAlertMessage //, resetLoaderMessage 
} from '../actions/';

class GeneralLoader extends React.Component {
    constructor(props) {
        super(props);
        
        //detects router change and clears uiAlert
        this.props.history.listen((location, action) => {
            //console.log('resetting messages');
            this.props.resetAlertMessage();
            //
            //this.props.resetLoaderMessage();
        });
    }   


    render() {
        console.log('re-rendering generalLoader');
        return (
            <React.Fragment>
                {this.props.appState.isFetchingGlobal &&
                    <React.Fragment>
                        <h2>Loading</h2>
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

export default withRouter(connect(mapStateToProps, { fetchUserBasicInfo, resetAlertMessage//, resetLoaderMessage 
})(GeneralLoader));