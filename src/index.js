import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './index.css';
import TimeEntry from './components/timeentry';
import store, {history} from './store';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <TimeEntry />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );

 