import * as actionTypes from '../actions/index';
import { timeEntryReducer } from './timeEntryReducer';

const initialState = {
    activities: [],
    activity: [],
    hasConfirm: false
};

describe('the time entry state changes in response to events', () => {
    it('shows confirm modal box', () => {
        const expectedState = {
            ...initialState,
            hasConfirm: true
        };
        let state = timeEntryReducer(initialState, {type: actionTypes.SHOW_CONFIRM_MESSAGE});
        expect(state).toEqual(expectedState);
    })
    it('shows resets the confirm modal box', () => {
        const expectedState = {
            ...initialState,
            hasConfirm: false
        };
        let state = timeEntryReducer(initialState, {type: actionTypes.RESET_CONFIRM_MESSAGE});
        expect(state).toEqual(expectedState);
    })
    it('fetches user activities', () => {
        const expectedState = {
            ...initialState,
            activities: [{activity:'abc'}]
        };
        let state = timeEntryReducer(initialState, {
            type: actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS,
            response: {
                activities: [{activity:'abc'}]
            }
        });
        expect(state).toEqual(expectedState);
    })
    it('creates a user activity', () => {
        const expectedState = {
            ...initialState,
            activities: [{activity:'abc'}]
        };
        let state = timeEntryReducer(initialState, {
            type: actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS,
            response: {
               activities: [{activity:'abc'}]
            }
        });
        expect(state).toEqual(expectedState);
    })
    it('gets a user activity', () => {
        const expectedState = {
            ...initialState,
            activity: {}
        };
        let state = timeEntryReducer(initialState, {
            type: actionTypes.FETCH_USER_ACTIVITY_REQUEST_SUCCESS,
            response: {}
        });
        expect(state).toEqual(expectedState);
    })
    it('gets a user`s activities', () => {
        const expectedState = {
            ...initialState,
            activities: [{activity: 'ok'}]
        };
        let state = timeEntryReducer(initialState, {
            type: actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS,
            response: {
                activities: [{activity: 'ok'}]  
            }
        });
        expect(state).toEqual(expectedState);
    })

});