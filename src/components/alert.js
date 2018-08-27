import React from 'react';
import './alert.css';

export default function Alert (props) {
    if (props.uiAlert.hasUIAlert) {
        return (<div className={`errorDesc ${props.uiAlert.uiMessageClass}`} aria-live="assertive">{props.uiAlert.uiMessage}</div>)
    }
    return (<div></div>)
}
