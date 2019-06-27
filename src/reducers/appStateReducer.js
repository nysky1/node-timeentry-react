import * as actionTypes from '../actions/index';
 
const initialState = {
  hasUIAlert: null,
  uiMessage: null,
  uiMessageClass: "",
  isFetchingUserBasicInfo: false,
  isFetchingGlobal: false,
  startUpEmail: ""
};
 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingGlobal: true,
      };
    }
    case actionTypes.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS: {        
        return {
          ...state,
          isFetchingGlobal: initialState.isFetchingGlobal,
        };
      }
    case actionTypes.FETCH_USER_ACTIVITIES_ALL_REQUEST_SUCCESS: {        
        return {
          ...state,
          isFetchingGlobal: initialState.isFetchingGlobal,
        };
      }
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingUserBasicInfo: true,
      };
    }
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS:
      return {
        ...state,
        isFetchingUserBasicInfo: initialState.isFetchingUserBasicInfo,
      };
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserBasicInfo: initialState.isFetchingUserBasicInfo,
      };
    }
    case actionTypes.SHOW_ALERT_MESSAGE: {
      return {
        ...state,
        hasUIAlert: true,
        uiMessage: action.response.generalMessage,
        uiMessageClass: "green"
      };
    }
    case actionTypes.SHOW_ERROR_MESSAGE: {
      return {
        ...state,
        hasUIAlert: true,
        uiMessage: (action.response.messages == null) ? action.response.generalMessage : (action.response.messages[0])
      };
    }
    //clears error messages from state
    case actionTypes.RESET_ALERT_MESSAGE: {
      return {
        ...state,
        hasUIAlert: initialState.hasUIAlert,
        uiMessage: initialState.uiMessage,
        uiMessageClass: initialState.uiMessageClass,

      };
    }
    case actionTypes.START_EMAIL: {
      return {
        ...state,
        email: action.email
      };
    }
    default: {
      return state;
    }
  }
}