import React from 'react';
import { connect } from 'react-redux';
import { resetConfirmMessage, removeActivity } from '../actions/index';

const Confirm = (props) => {
    console.log(props);
    const confirmNo = () => {
        props.resetConfirmMessage();
    }
    const confirmYes = () => {
        props.removeActivity(props.eventId);
    }
    return (props.isShown &&
        <div className="divConfirm">
            <div className="divConfirmContent">
                <div className="divContainer">
                    <h3>Are you sure?</h3>
                    <button className="btnStandard btnConfirmYes" onClick={() => confirmYes()}>Yes</button>
                    <button className="btnStandard btnConfirmNo" onClick={() => confirmNo()}>No</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps,{resetConfirmMessage,removeActivity})(Confirm);