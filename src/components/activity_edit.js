import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { saveActivity, fetchUserActivity, showConfirmMessage } from '../actions/index';
import Alert from './alert';
//import './activity_new.css';
import TextArea from './textArea';
import Confirm from './confirm';
import { required, nonEmpty, email } from './validators';


export class ActivityEdit extends React.Component {
    componentDidMount() {
        //console.log('fettching activity');
        this.props.fetchUserActivity(this.props.match.params.eventId);
    }

    onSubmit(values) {
        const eventId = this.props.match.params.eventId;
        const activity = values.activity;
        const activityDuration = values.activityDuration;
        const activityDate = values.activityDate;
        this.props.saveActivity(eventId, activity, activityDate, activityDuration);
    }
    handleDelete() {
        this.props.showConfirmMessage();
    }
    render() {
        //console.log(this.props.timeEntry.isFetching);
        //console.log('activity' + this.props.timeEntry.activity.activity)
        //if (this.props.isFetching) {
        //    return (<div>Loading...</div>)
        //}
        //else {
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">Edit Activity</h1>
                    <form id="frmNewActivity"
                        onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
                        method="post" >
                        <fieldset>
                            <Alert uiAlert={this.props.uiAlert} />
                            <Field component={TextArea}
                                name="activity" validate={[required, nonEmpty]} placeholder="Describe your Activity" aria-label="Describe your Activity" className="text-input"
                            />
                            <Field component={Input}
                                name="activityDate" type="date" validate={[required, nonEmpty]} placeholder="Date of Activity (YYYY-MM-DD)" aria-label="Enter an Activity Date" className="text-input"
                            />
                            <Field component={Input}
                                name="activityDuration" validate={[required, nonEmpty]} type="number" step="0.25" required value="" placeholder="Hours of Activity" aria-label="Enter the Activity duration in hours" className="text-input"
                            />
                            <input
                                disabled={this.props.pristine || this.props.submitting}
                                type="submit" name="Save" value="Save" className="btnLogin btnStandard" />
                        </fieldset>

                        <div className="lnkBack">
                            <Link to={`/activities`} aria-label="Cancel this edit">Cancel this edit</Link> |
                                <a href="#" aria-label="Delete this activity" onClick={() => this.handleDelete()}>Delete this item</a>
                        </div>
                    </form>
                </div>
                <Confirm isShown={this.props.timeEntry.hasConfirm} eventId={this.props.match.params.eventId} />
            </div>

        )

    }
}
//https://stackoverflow.com/questions/41267037/redux-form-initial-values-from
let InitializeForm = reduxForm({
    form: 'ActivityEdit',
    enableReinitialize: true //essential so that if back is used will refill
})(ActivityEdit)

InitializeForm = connect(state => ({
    initialValues: state.timeEntry.activity,
    isFetching: state.timeEntry.isFetching,
    user: state.user,
    uiAlert: state.appState,
    timeEntry: state.timeEntry
}), { saveActivity, fetchUserActivity, showConfirmMessage })(InitializeForm)

export default InitializeForm;