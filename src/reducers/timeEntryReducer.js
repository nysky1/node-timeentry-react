import * as actionTypes from '../actions';

const initialState = {
    activities: [],
    isFetching: false,
    activity: [],
    hasConfirm: false
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
        case actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS: {
            return {
                ...state,
                activities: action.response.activities,
            }
        }
        case actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                activities: action.response.activities
            }
        case actionTypes.FETCH_USER_ACTIVITY_REQUEST_TRIGGERED: {
            return {
                ...state,
                isFetching: true
            }
        }
        case actionTypes.FETCH_USER_ACTIVITY_REQUEST_FAILURE: {
            return {
                ...state,
                isFetching: false
            }
        }
        case actionTypes.FETCH_USER_ACTIVITY_REQUEST_SUCCESS:
            return {
                ...state,
                activity: action.response,
                isFetching: false
            }

    }
    return state;
}