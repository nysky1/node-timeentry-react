import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {resetAlertMessage} from '../actions/index';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.resetAlertMessage();
        //this.props.fetchUserBasicInfo();
    }
    render() { 
        let isHiddenItem = (this.props.user.role)
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">Dashboard</h1>
                    <form id="frmDashboard">
                        <fieldset>
                            <Link className="btnStandard viewActivities" to="/activities">
                                <i className="fa fa-calendar-check-o"></i>View Your Activities</Link>
                            <br />
                            <Link className="btnStandard newActivity" to="/activity_new">
                                <i className="fa fa-pencil"></i>Log an Activity</Link>
                        </fieldset>
                        {this.props.user.role === "admin" && <fieldset className="fldAdmin" hidden>
                            <Link className="btnStandard btnAdmin viewActivitiesAdmin" to="/activities"  >
                                <i className="fa fa-users"></i>View All User Activities
                            </Link>
                        </fieldset>}
                        
                    </form>
                </div>
            </div>              
        )
    }
}

const mapStateToProps = state => ({
    uiAlert: state.appState,
    user: state.user
});

export default connect(mapStateToProps, {resetAlertMessage })(Dashboard);