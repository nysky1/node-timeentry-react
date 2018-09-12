import React from 'react';
import {shallow} from 'enzyme';
import { MemoryRouter } from 'react-router';
import GlobalLoader  from './globalLoader';
import Home from './home';

describe('<GlobalLoader />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        const appState = {isFetchingUserBasicInfo: false}
        shallow(<GlobalLoader />);
    });
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        const appState = {isFetchingUserBasicInfo: false}
        shallow(<GlobalLoader appState={appState} />);
    });

    test('invalid default / path', () => {
        const wrapper = shallow(
          <MemoryRouter initialEntries={[ '/' ]}>
            <Home />
          </MemoryRouter>
        );
        expect(wrapper.find(Home)).toHaveLength(1);
      });
});