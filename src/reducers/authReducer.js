import * as actionTypes from '../actions/index';

const initialState = {
    isLoggedIn: false,
    id: null,
    username: null,
    email: null,
    role: null

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // Fetch Basic Info about User
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
          console.log('here');
          return {
            ...state,
            id: action.response._id,
            username: action.response.username,
            email: action.response.email,
            isLoggedIn: true,
            role: action.response.role
          };
        }
        case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
          return {
            ...state,
            id: action.response._id,
            username: action.response.username,
            email: action.response.email,
            isLoggedIn: true,
            role: action.response.role
          };
        }
        default: {
          return state;
        }
      }
}