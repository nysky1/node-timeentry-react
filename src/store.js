import {createStore, applyMiddleware, compose} from 'redux'
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware/api-middleware';
import appConfig from './config/appConfig';
import mainReducer from './reducers/indexReducer';

export const history = createHistory();

const middleware = [
    thunk,
    apiMiddleware,
    routerMiddleware(history)
  ];
const enhancers = [];

if (appConfig.SHOW_REDUX_DEV_TOOLS) {
    const { devToolsExtension } = window;
   
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

const composedEnhancers = compose(
applyMiddleware(...middleware)
,...enhancers,
);

const store = createStore(
    mainReducer,
    composedEnhancers
);

export default store;