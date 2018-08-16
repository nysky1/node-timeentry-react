import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import TimeEntry from './components/timeentry';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <TimeEntry />
    </Provider>,
    document.getElementById('root')
  );
 