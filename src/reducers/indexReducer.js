import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import appState from './appStateReducer';
import user from './authReducer';
import { timeEntryReducer } from './timeEntryReducer';

const mainReducer = combineReducers({
  appState,
  user,
  routing: routerReducer,
  form: reduxFormReducer,
  timeEntry: timeEntryReducer
});

export default mainReducer;