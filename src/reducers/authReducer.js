// import {
//     SET_AUTH_TOKEN,
//     CLEAR_AUTH,
//     AUTH_REQUEST,
//     AUTH_SUCCESS,
//     AUTH_ERROR
// } from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    
    return state;
}