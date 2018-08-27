import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { editActivity, fetchUserActivities} from '../actions/index';
import Alert from './alert';
//import './activity_new.css';
import TextArea from './textArea';
import { required, nonEmpty, email } from './validators';


export class ActivityEdit extends React.Component {
    componentDidMount(props) {
        console.log('activities...');
        this.props.fetchUserActivities();
    }  
    filterActivity() {
        return this.props.activities.find( (activity) => {
            //console.log(activity._id);
            return activity._id == this.props.match.params.eventId ;
        } );
    }
    onSubmit(values) {
        const eventId = this.props.match.params.eventId;
        const activity = values.activity;
        const activityDuration = values.activityDuration;
        const activityDate = values.activityDate;
        this.props.editActivity(eventId,activity, activityDate, activityDuration);
    }
    render() {
        
        let activityRec = this.filterActivity();
        //if (!activityRec) return null  
        console.log('rendering activity edit');
        console.log(activityRec);
        //console.log(activityRec.activity)
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">Edit Activity</h1>
                    <form id="frmNewActivity" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} method="post" >
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
                              disabled={ this.props.pristine || this.props.submitting }
                             type="submit" name="Save" value="Save" className="btnLogin btnStandard" />
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialValues: {

    },
    uiAlert: state.appState,
    user: state.user,
    activities: state.timeEntry.activities
});

export default reduxForm({
    form: 'EditActivity',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('ActivityEdit', Object.keys(errors)[0]))
})(connect(mapStateToProps, { editActivity, fetchUserActivities })(ActivityEdit));