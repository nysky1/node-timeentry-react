import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';
import { SHOW_ALERT_MESSAGE } from './generalActions';

export const FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED = 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED';
export const FETCH_USER_BASIC_INFO_REQUEST_SUCCESS = 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS';
export const FETCH_USER_BASIC_INFO_REQUEST_FAILURE = 'FETCH_USER_BASIC_INFO_REQUEST_FAILURE';

const UI_ALERT_MESSAGES = {
    profileCreation: 'Profile created, now you can login.'
}

const handleFetchUserResponse = (response,dispatch) => {
    dispatch({
        type: FETCH_USER_BASIC_INFO_REQUEST_SUCCESS,
        response,
    });
    //dispatch(push('/dashboard'));
}

export function fetchUserBasicInfo() {
    //console.log('starting fetch');
    const promise = fetch(`${appConfig.USER_VALIDATE_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED,
        onSuccess: handleFetchUserResponse,
        onFailure: FETCH_USER_BASIC_INFO_REQUEST_FAILURE,
        promise,
    };
}

export const FETCH_USER_LOGIN_REQUEST_TRIGGERED = 'FETCH_USER_LOGIN_REQUEST_TRIGGERED';
export const FETCH_USER_LOGIN_REQUEST_SUCCESS = 'FETCH_USER_LOGIN_REQUEST_SUCCESS';
export const FETCH_USER_LOGIN_REQUEST_FAILURE = 'FETCH_USER_LOGIN_REQUEST_FAILURE';

const handleLoginResponse = (response, dispatch) => {
  sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, response.token);
  sessionStorage.setItem(appConfig.USER_CONTENT_KEY, response._id);
  dispatch({
      type: FETCH_USER_LOGIN_REQUEST_SUCCESS,
      response,
  });
  
  dispatch(push('/dashboard'));
};

/*
1. fetchUserLogin is "action creator function" returns an object back
1. Components dispatching object
3. Object floats inside middleware 
4. Middlware looks if async or not
5. If async and contains promise, go through the onRequest
*/

export function fetchUserLogin(username, password) {
    const promise = fetch(`${appConfig.USER_LOGIN_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username,
          password,
        }),
    });
    return {
        onRequest: FETCH_USER_LOGIN_REQUEST_TRIGGERED,
        onSuccess: handleLoginResponse,
        onFailure: FETCH_USER_LOGIN_REQUEST_FAILURE,
        promise,
    };
  }

export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function createUser(firstName, lastName, email, username, password) {
    const promise = fetch(`${appConfig.USER_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password
        }),
    });
    return {
        onRequest: FETCH_USER_SIGNUP_REQUEST_TRIGGERED,
        onSuccess: handleCreateUserResponse,
        onFailure: FETCH_USER_SIGNUP_REQUEST_FAILURE,
        promise,
    };
  }

const handleCreateUserResponse = (response, dispatch) => {
    dispatch({
        type: CREATE_USER_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/login'));
    dispatch({ type: SHOW_ALERT_MESSAGE, response: {
        generalMessage: UI_ALERT_MESSAGES.profileCreation}
      } );
};