import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { createActivity } from '../actions/index';
import Alert from './alert';
//import './activity_new.css';
import TextArea from './textArea';
import { required, nonEmpty, email } from './validators';
import getEnv from '../config/environments';

export class NewActivity extends React.Component {
    onSubmit(values) {
        const activity = values.activity;
        const activityDuration = values.activityDuration;
        const activityDate = values.activityDate;
        this.props.createActivity(activity, activityDate, activityDuration);
    }
    render() {
        let isDev = (getEnv().ENV == "development");
        let devDefaultVal = (isDev) ? "2018-10-01" : "";
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">Log an Activity</h1>
                    <form id="frmNewActivity" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} method="post" >
                        <fieldset>
                            <Alert uiAlert={this.props.uiAlert} />
                            <Field component={TextArea}
                                name="activity" validate={[required, nonEmpty]} value="" placeholder="Describe your Activity" aria-label="Describe your Activity" className="text-input"
                            />
                            <Field component={Input}
                                name="activityDate" validate={[required, nonEmpty]} defaultValue={devDefaultVal} placeholder="Date of Activity (YYYY-MM-DD)" aria-label="Enter an Activity Date" className="text-input"
                            />
                            <Field component={Input}
                                name="activityDuration" validate={[required, nonEmpty]} type="number" step="0.25" required value="" placeholder="Hours of Activity" aria-label="Enter the Activity duration in hours" className="text-input"
                            />
                            <input
                              disabled={ this.props.pristine || this.props.submitting }
                             type="submit" name="login" value="Save" className="btnLogin btnStandard" />
                        </fieldset>
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

export default reduxForm({
    form: 'NewActivity',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('NewActivity', Object.keys(errors)[0]))
})(connect(mapStateToProps, { createActivity })(NewActivity));