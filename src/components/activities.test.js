import React from 'react';
import {shallow,mount} from 'enzyme';
import store from '../store'
import ActivityEdit  from './activities';

describe('<ActivityEdit />', () => {
    it('Renders without crashing', () => {
        shallow(<ActivityEdit store={store} />);
    });
});