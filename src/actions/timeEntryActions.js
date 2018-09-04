import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';
import { RESET_CONFIRM_MESSAGE } from './generalActions';

export const FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED = 'FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED';
export const FETCH_USER_ACTIVITIES_REQUEST_SUCCESS = 'FETCH_USER_ACTIVITIES_REQUEST_SUCCESS';
export const FETCH_USER_ACTIVITIES_REQUEST_FAILURE = 'FETCH_USER_ACTIVITIES_REQUEST_FAILURE';

const handleUserActivitiesSuccess = (response,dispatch) => {
    console.log('dispatching success');
    dispatch( { type: FETCH_USER_ACTIVITIES_REQUEST_SUCCESS, response})
}

export function fetchUserActivities() {
    //console.log('fetchingactivities...')
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED,
        onSuccess: handleUserActivitiesSuccess,
        onFailure: FETCH_USER_ACTIVITIES_REQUEST_FAILURE,
        promise,
    };
}

export const FETCH_USER_ACTIVITY_REQUEST_TRIGGERED = 'FETCH_USER_ACTIVITY_REQUEST_TRIGGERED';
export const FETCH_USER_ACTIVITY_REQUEST_SUCCESS = 'FETCH_USER_ACTIVITY_REQUEST_SUCCESS';
export const FETCH_USER_ACTIVITY_REQUEST_FAILURE = 'FETCH_USER_ACTIVITY_REQUEST_FAILURE';

const handleUserActivityResponse = (response, dispatch) => { 
    dispatch({
        type: FETCH_USER_ACTIVITY_REQUEST_SUCCESS,
        response,
    });
}

export function fetchUserActivity(eventId) {
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${eventId}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USER_ACTIVITY_REQUEST_TRIGGERED,
        onSuccess: handleUserActivityResponse,
        onFailure: FETCH_USER_ACTIVITY_REQUEST_FAILURE,
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

export function saveActivity(activityId,activity,activityDate,activityDuration) {
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${activityId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        },
        body: JSON.stringify({
            eventId: activityId,
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

export const REMOVE_USER_ACTIVITY_REQUEST_TRIGGERED = 'REMOVE_USER_ACTIVITY_REQUEST_TRIGGERED';
export const REMOVE_USER_ACTIVITY_REQUEST_SUCCESS = 'REMOVE_USER_ACTIVITY_REQUEST_SUCCESS';
export const REMOVE_USER_ACTIVITY_REQUEST_FAILURE = 'REMOVE_USER_ACTIVITY_REQUEST_FAILURE';


const handleRemoveUserActivityResponse = (response, dispatch) => { 
    console.log(response);
    dispatch({
        type: RESET_CONFIRM_MESSAGE,
        response,
    });
    dispatch(push('/activities'));
}

export function removeActivity(activityId) {
    console.log('removing..');
    const promise = fetch(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${activityId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: REMOVE_USER_ACTIVITY_REQUEST_TRIGGERED,
        onSuccess: handleRemoveUserActivityResponse, //ensure returns some body and 200
        onFailure: REMOVE_USER_ACTIVITY_REQUEST_FAILURE,
        promise,
    };
}