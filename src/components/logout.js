import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { handleLogout } from '../actions/index';


export class Logout extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const eventId = this.props.match.params.eventId;
        this.props.handleLogout();
    }
    render() {
        return (
            <div className="mainBox">
                <div className="mainInnerBox noTop">
                    <h1 className="mainInnerBoxHeader">You are Logged Out</h1>

                    <div className="lnkBack">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   
});
export default connect(mapStateToProps, {handleLogout})(Logout);