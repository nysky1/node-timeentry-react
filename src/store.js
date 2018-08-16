import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import {timeEntryReducer} from './reducers/timeEntryReducer';
import authReducer from './reducers/authReducer';

export default createStore(
    combineReducers({
        timeEntry: timeEntryReducer,
        auth: authReducer
    }), 
    applyMiddleware(thunk)
);

