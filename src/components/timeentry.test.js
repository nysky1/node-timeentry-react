import React from 'react';
import {shallow} from 'enzyme';

import {TimeEntry} from './timeentry';
import GlobalLoader from './globalLoader';

describe('<TimeEntry />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        const user = {isLoggedIn: false}
        shallow(<TimeEntry user={user} />);
    });
});