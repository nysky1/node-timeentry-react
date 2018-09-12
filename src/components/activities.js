import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserActivities } from '../actions/index';
import PropTypes from 'prop-types'
import './activities.css'

export class Activities extends React.Component {

    componentDidMount() {
        this.props.fetchUserActivities();
    }

    createResults = () => {
        let resultsHTML = this.props.activities.map((activity, index) => {
            return (
                <Link key={index} to={`/activity_edit/${activity._id}`}>
                    <li className='js-panel-list-wrapper' role="button" >
                        <div className="editButton"><button className="btnSmall btnStandard">Modify</button></div>
                        <div className='eventDate'>{activity.activityDate}</div>
                        <div className="eventNameSpacer">&nbsp;</div>
                        <div className="eventHours">{activity.activityDuration} hour(s)</div>
                        <div className="eventName">{activity.activity}</div>
                    </li>
                </Link>
            )
        });
        return (<ul>{resultsHTML}</ul>)
    }
    render() {
        return (
            <main role="main">
                <h1 className="mainInnerBoxHeader">Activity Log</h1>
                <div className="mainBox backgroundInverse">
                    <div className="mainInnerBox noTop">
                        <div className="js-results" aria-live="assertive">
                            {this.createResults()}
                        </div>

                    </div>

                </div>
                <div className="divAddActivityWrapper">
                    <div className="lnkBack">
                        <Link to={`/activity_new`} aria-label="New Activity">Log an Activity</Link>
                    </div>
                </div>

            </main>
        )
    }
}

const mapStateToProps = state => ({
    activities: state.timeEntry.activities,
    appState: state.appState,
    user: state.user,
});

export default connect(mapStateToProps, { fetchUserActivities })(Activities);