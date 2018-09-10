import React from 'react';
import {shallow,mount} from 'enzyme';
import store from '../store'
import ActivitiesEdit  from './activity_edit';

describe('<ActivitiesEdit />', () => {
    it('Renders without crashing', () => {
        shallow(<ActivitiesEdit store={store} />);
    });
});