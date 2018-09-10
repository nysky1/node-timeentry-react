import React from 'react';
import {shallow,mount} from 'enzyme';
import { MemoryRouter } from 'react-router';
import { render, unmountComponentAtNode } from 'react-dom'

import NavBar from './navbar';

describe('<NavBar />', () => {
    it('Renders without crashing', () => {
        shallow(<NavBar isAuth="true" />);
    });
});