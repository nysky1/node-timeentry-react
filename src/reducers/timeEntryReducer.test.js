import * as actionTypes from '../actions/index';
import {timeEntryReducer} from './timeEntryReducer';

const initialState = {
    activities: [],
    activity: [],
    hasConfirm: false
};


describe('the time entry state changes in response to events', () => {
  it( 'shows confirm modal box',  () => {
    const responseState = {
        ...initialState,
        hasConfirm: true
    };
    let state = timeEntryReducer( initialState, { type: actionTypes.SHOW_CONFIRM_MESSAGE, 
        response: {
            ...initialState,
            hasConfirm: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'shows resets the confirm modal box',  () => {
    const responseState = {
        ...initialState,
        hasConfirm: false
    };
    let state = timeEntryReducer( initialState, { type: actionTypes.RESET_CONFIRM_MESSAGE, 
        response: {
            ...initialState,
            hasConfirm: initialState.hasConfirm
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'fetches user activities',  () => {
    const responseState = {
        ...initialState,
        activities: []
    };
    let state = timeEntryReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS, 
        response: {
            ...initialState,
            activities: []
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'creates a user activity',  () => {
    const responseState = {
        ...initialState,
        activities: []
    };
    let state = timeEntryReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS, 
        response: {
            ...initialState,
            activities: []
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'gets a user activity',  () => {
    const responseState = {
        ...initialState,
        activity: {}
    };
    let state = timeEntryReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITY_REQUEST_SUCCESS, 
        response: {
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'gets a user`s activities',  () => {
    const responseState = {
        ...initialState,
        activities: []
    };
    let state = timeEntryReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS, 
        response: {
            ...initialState,
            activities: []
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  
});