import * as actionTypes from '../actions/index';
import AppStateReducer from './appStateReducer';

const initialState = {
  hasUIAlert: null,
  uiMessage: null,
  uiMessageClass: "",
  isFetchingUserBasicInfo: false,
  isFetchingGlobal: false
};


describe('the app state changes in response to events', () => {
  it( 'registers a fetch user activities has been requested',  () => {
    const responseState = {
        ...initialState,
        isFetchingGlobal: true
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED, 
        response: {
            isFetchingGlobal: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'registers a fetch user activities has been successful',  () => {
    const expectedState = { 
        ...initialState,
        isFetchingGlobal: false
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS} );
    expect( state ).toEqual( expectedState );
  } )
  it( 'registers a fetch user basic info has been requested',  () => {
    const expectedState = {
        ...initialState,
        isFetchingUserBasicInfo: true
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED} );
    expect( state ).toEqual( expectedState );
  } )
  it( 'registers a fetch user basic info has been successful',  () => {
    const expectedState = {
        ...initialState,
        isFetchingUserBasicInfo: false
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS} );
    expect( state ).toEqual( expectedState );
  } )
  it( 'registers a fetch user basic info has failed and status reset',  () => {
    const expectedState = {
        ...initialState,
        isFetchingUserBasicInfo: false
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE} );
    expect( state ).toEqual( expectedState );
  } )
  it( 'registers an alert message is shown',  () => {
    const expectedState = {
        ...initialState,
        hasUIAlert: true,
        uiMessage: "Hello",
        uiMessageClass: "green"
    };
    let state = AppStateReducer( initialState, { type: actionTypes.SHOW_ALERT_MESSAGE, 
        response: {
            hasUIAlert: true,
            generalMessage: "Hello",
            uiMessageClass: "green"
        } 
    } );
    expect( state ).toEqual( expectedState );
  } )
  it( 'registers an error message as shown',  () => {
    const expectedState = {
        ...initialState,
        hasUIAlert: true,
        uiMessage: 'OK'
    };
    let state = AppStateReducer( initialState, { type: actionTypes.SHOW_ERROR_MESSAGE, 
        response: {
            hasUIAlert: true,
            generalMessage: 'OK'
        } 
    } );
    expect( state ).toEqual( expectedState );
  } )
  it( 'resets the error message to initial state',  () => {
    const expectedState = {
        ...initialState,
        hasUIAlert: initialState.hasUIAlert,
        uiMessage: initialState.uiMessage,
        uiMessageClass: initialState.uiMessageClass
    };
    let state = AppStateReducer( initialState, { type: actionTypes.RESET_ALERT_MESSAGE} );
    expect( state ).toEqual( expectedState );
  } )
});