import * as actionTypes from '../actions';

const initialState = {
    activities: []
};

export const timeEntryReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS: {
            return {
                ...state,
                activities: action.response.activities
            }
        }
        case actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS:
        return {
            ...state,
            activities: action.response.activities
        }
    }
    return state;
}