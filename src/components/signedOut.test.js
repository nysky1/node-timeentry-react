import React from 'react';
import {shallow,mount} from 'enzyme';

import SignedOut from './signedOut';

describe('<SignedOut />', () => {
    it('Renders without crashing', () => {
        shallow(<SignedOut />);
    });
});