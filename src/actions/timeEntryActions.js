import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';
import { SHOW_ALERT_MESSAGE } from './generalActions';

export const FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED = 'FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED';
export const FETCH_USER_ACTIVITIES_REQUEST_SUCCESS = 'FETCH_USER_ACTIVITIES_REQUEST_SUCCESS';
export const FETCH_USER_ACTIVITIES_REQUEST_FAILURE = 'FETCH_USER_ACTIVITIES_REQUEST_FAILURE';


export function fetchUserActivities() {
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED,
        onSuccess: FETCH_USER_ACTIVITIES_REQUEST_SUCCESS,
        onFailure: FETCH_USER_ACTIVITIES_REQUEST_FAILURE,
        promise,
    };
}

export const FETCH_USER_ACTIVITY_CREATE_REQUEST_TRIGGERED = 'FETCH_USER_ACTIVITY_CREATE_REQUEST_TRIGGERED';
export const FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS = 'FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS';
export const FETCH_USER_ACTIVITY_CREATE_REQUEST_FAILURE = 'FETCH_USER_ACTIVITY_CREATE_REQUEST_FAILURE';


const handleCreateUserActivityResponse = (response, dispatch) => { 
    dispatch({
        type: FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/activities'));
}

export function createActivity(activity,activityDate,activityDuration) {
    
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        },
        body: JSON.stringify({
            activity: activity,
            activityDate,
            activityDuration,
            id: sessionStorage.getItem(appConfig.USER_CONTENT_KEY)
          }),
    });
    return {
        onRequest: FETCH_USER_ACTIVITY_CREATE_REQUEST_TRIGGERED,
        onSuccess: handleCreateUserActivityResponse,
        onFailure: FETCH_USER_ACTIVITY_CREATE_REQUEST_FAILURE,
        promise,
    };
}

export const FETCH_USER_ACTIVITY_EDIT_REQUEST_TRIGGERED = 'FETCH_USER_ACTIVITY_EDIT_REQUEST_TRIGGERED';
export const FETCH_USER_ACTIVITY_EDIT_REQUEST_SUCCESS = 'FETCH_USER_ACTIVITY_EDIT_REQUEST_SUCCESS';
export const FETCH_USER_ACTIVITY_EDIT_REQUEST_FAILURE = 'FETCH_USER_ACTIVITY_EDIT_REQUEST_FAILURE';


const handleEditUserActivityResponse = (response, dispatch) => { 
    dispatch({
        type: FETCH_USER_ACTIVITY_EDIT_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/activities'));
}

export function editActivity(activity,activityDate,activityDuration) {
    let id = '';
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        },
        body: JSON.stringify({
            eventId: id,
            activity: activity,
            activityDate,
            activityDuration,
            id: sessionStorage.getItem(appConfig.USER_CONTENT_KEY)
          }),
    });
    return {
        onRequest: FETCH_USER_ACTIVITY_EDIT_REQUEST_TRIGGERED,
        onSuccess: handleEditUserActivityResponse,
        onFailure: FETCH_USER_ACTIVITY_EDIT_REQUEST_FAILURE,
        promise,
    };
}