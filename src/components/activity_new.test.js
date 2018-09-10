import React from 'react';
import {shallow,mount} from 'enzyme';
import store from '../store'
import NewActivity  from './activity_new';

describe('<NewActivity />', () => {
    it('Renders without crashing', () => {
        shallow(<NewActivity store={store} />);
    });
});