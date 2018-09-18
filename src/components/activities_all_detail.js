import React from 'react';

const ActivityAllDetail = ( props ) => {
    //npmif (!props.activities.length) {return }

    let resultsHTML = props.activities.map((activity, index) => {
        return (
            <div className="js-panel-item" key={index}>
                <div className="eventDate">Date: {activity.activityDate}</div>
                <div className="eventNameSpacer">&nbsp;</div>
                <div className="eventHours">{activity.activityDuration} hours</div>
                <div className="eventName">Activity: {activity.activity}</div>
            </div>
        )
    });

    return(
        resultsHTML
       
    )
};

export default ActivityAllDetail; 