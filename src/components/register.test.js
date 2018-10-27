import React from 'react';
import {shallow,mount} from 'enzyme';
import store from '../store'
import Register  from './register';

describe('<Register />', () => {
    it('Renders without crashing', () => {
        shallow(<Register store={store}/>);
    });
});