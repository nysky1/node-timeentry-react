import React from 'react';
import { connect } from 'react-redux';

const Confirm = (props) => {
    return (props.isShown &&
        <div className="divConfirm">
            <div className="divConfirmContent">
                <div className="divContainer">
                    <h3>Are you sure?</h3>
                    <button className="btnStandard btnConfirmYes" onClick={() => props.onConfirm()}>Yes</button>
                    <button className="btnStandard btnConfirmNo" onClick={() => props.onReset()}>No</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Confirm);