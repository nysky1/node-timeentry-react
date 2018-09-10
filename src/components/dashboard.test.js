import React from 'react';
import {shallow,mount} from 'enzyme';
import store from '../store'
import Dashboard  from './dashboard';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard store={store} />);
    });
});