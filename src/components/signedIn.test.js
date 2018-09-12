import React from 'react';
import {shallow} from 'enzyme';

import SignedIn from './signedIn';

describe('<SignedIn />', () => {
    it('Renders without crashing', () => {
        shallow(<SignedIn />);
    });
});