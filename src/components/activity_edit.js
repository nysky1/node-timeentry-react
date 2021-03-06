import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { saveActivity, fetchUserActivity, showConfirmMessage, resetConfirmMessage } from '../actions/index';
import Alert from './alert';
//import './activity_new.css';
import TextArea from './textArea';
import Confirm from './confirm';
import { required, nonEmpty, email } from './validators';
import { removeActivity } from '../actions/index';


export class ActivityEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const eventId = this.props.match.params.eventId;
        this.props.fetchUserActivity(eventId);
    }
    onConfirm() {
        const eventId = this.props.match.params.eventId;
        this.props.removeActivity(eventId);
    }
    onReset() {
        this.props.resetConfirmMessage();
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
                            <Link to={`/activities`} aria-label="Cancel this edit">Cancel this Edit</Link> 
                                <a href="#" aria-label="Delete this activity" onClick={() => this.handleDelete()}>Delete this Entry</a>
                        </div>
                    </form>
                </div>
                <Confirm onReset={this.onReset.bind(this)} onConfirm={this.onConfirm.bind(this)} isShown={this.props.timeEntry.hasConfirm} eventId={this.props.match.params.eventId} />
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
}), { saveActivity, fetchUserActivity, showConfirmMessage, resetConfirmMessage, removeActivity })(InitializeForm)

export default InitializeForm;