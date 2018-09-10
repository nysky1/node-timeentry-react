import React from 'react';
import {shallow,mount} from 'enzyme';

import Register  from './register';

describe('<Register />', () => {
    it('Renders without crashing', () => {
        shallow(<Register />);
    });
});