import * as actionTypes from '../actions';

const initialState = {
    activities: [],
    activity: [],
    hasConfirm: false,
    users: []
};

export const timeEntryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_CONFIRM_MESSAGE: {
            return {
                ...state,
                hasConfirm: true
            };
        }
        case actionTypes.RESET_CONFIRM_MESSAGE: {
            return {
                ...state,
                hasConfirm: false
            };
        }
        case actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                activities: action.response.activities
            }
        case actionTypes.FETCH_USER_ACTIVITY_REQUEST_SUCCESS:
            return {
                ...state,
                activity: action.response
            }
        case actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS: {
            return {
                ...state,
                activities: action.response.activities,
            }
        }
        case actionTypes.FETCH_USER_ACTIVITIES_ALL_REQUEST_SUCCESS: {
            return {
                ...state,
                users: action.response,
            }
        }
        default: {
            return state;
        }
    }
}