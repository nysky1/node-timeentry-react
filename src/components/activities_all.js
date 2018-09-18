import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserActivitiesAll } from '../actions/index';
import  ActivityAllDetail from './activities_all_detail'
import './activities.css';
import './activities_all.css';

export class ActivitiesAll extends React.Component {

    componentDidMount() {
        this.props.fetchUserActivitiesAll();
    }

    countHours(arr) {
        let total = 0;
        for(let i = 0; i<arr.length; i++) {
           total += parseInt(arr[i].activityDuration); 
        }
        return total;
    }

    createResults = () => {

        let resultsHTML = this.props.users.filter( item => item.activities.length ).map((user, index) => {
            return ( 
                <li className="js-panel-list-wrapper-all-users"key={index}>
                    <div className="activityListUser">{user.firstName} {user.lastName} <span className="totalHours">Total Hours: {this.countHours(user.activities)}</span> </div>
                    <ActivityAllDetail activities={user.activities} />
                </li>
            )
        });
        return (<ul className="ulUserList">{resultsHTML}</ul>)
    }
    render() {
        return (
            <main role="main">
                <h1 className="mainInnerBoxHeader">Full Activity Log</h1>
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

function ActivityItem (props) {
    return <div>Hello ActivityItem</div>;
    
}
const mapStateToProps = state => ({
    users: state.timeEntry.users,
    appState: state.appState,
    user: state.user,
});

export default connect(mapStateToProps, { fetchUserActivitiesAll })(ActivitiesAll);