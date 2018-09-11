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
            ...initialState,
            isFetchingGlobal: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'registers a fetch user activities has been successful',  () => {
    const responseState = { 
        ...initialState,
        isFetchingGlobal: false
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS, 
        response: {
            ...initialState,
            isFetchingGlobal: initialState.isFetchingGlobal
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'registers a fetch user basic info has been requested',  () => {
    const responseState = {
        ...initialState,
        isFetchingUserBasicInfo: true
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED, 
        response: {
            ...initialState,
            isFetchingUserBasicInfo: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'registers a fetch user basic info has been successful',  () => {
    const responseState = {
        ...initialState,
        isFetchingUserBasicInfo: false
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS, 
        response: {
            ...initialState,
            isFetchingUserBasicInfo: initialState.isFetchingUserBasicInfo
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'registers a fetch user basic info has failed and status reset',  () => {
    const responseState = {
        ...initialState,
        isFetchingUserBasicInfo: false
    };
    let state = AppStateReducer( initialState, { type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE, 
        response: {
            ...initialState,
            isFetchingUserBasicInfo: initialState.isFetchingUserBasicInfo
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'registers an alert message is shown',  () => {
    const responseState = {
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
    expect( state ).toEqual( responseState );
  } )
  it( 'registers an error message as shown',  () => {
    const responseState = {
        ...initialState,
        hasUIAlert: true,
        uiMessage: undefined
    };
    let state = AppStateReducer( initialState, { type: actionTypes.SHOW_ERROR_MESSAGE, 
        response: {
            ...initialState,
            hasUIAlert: true,
            uiMessage: undefined
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  it( 'resets the error message to initial state',  () => {
    const responseState = {
        ...initialState,
        hasUIAlert: initialState.hasUIAlert,
        uiMessage: initialState.uiMessage,
        uiMessageClass: initialState.uiMessageClass
    };
    let state = AppStateReducer( initialState, { type: actionTypes.RESET_ALERT_MESSAGE, 
        response: {
            ...initialState,
            hasUIAlert: initialState.hasUIAlert,
          uiMessage: initialState.uiMessage,
          uiMessageClass: initialState.uiMessageClass
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
});