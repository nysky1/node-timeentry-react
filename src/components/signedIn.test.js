import React from 'react';
import {shallow,mount} from 'enzyme';

import SignedIn from './signedIn';

describe('<SignedIn />', () => {
    it('Renders without crashing', () => {
        shallow(<SignedIn />);
    });
});