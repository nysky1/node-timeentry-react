import * as actionTypes from '../actions/index';
import AuthReducer from './authReducer';

const initialState = {
    isLoggedIn: false,
    id: null,
    username: null,
    email: null,
    role: null
};

describe('the authorization state changes in response to events', () => {
    it('fetches basic user info', () => {
        const expectedState = {
            id: "abc",
            username: 'abc',
            email: 'aa@abc.com',
            isLoggedIn: true,
            role: 'user'
        };
        let state = AuthReducer(initialState, {
            type: actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS,
            response: {
                _id: "abc",
                username: 'abc',
                email: 'aa@abc.com',
                isLoggedIn: true,
                role: 'user'
            }
        });
        expect(state).toEqual(expectedState);
    })
    it('responds to a user login', () => {
        const expectedState = {
            id: 'abc',
            username: 'abc',
            email: 'aa@abc.com',
            isLoggedIn: true,
            role: 'user'
        };
        let state = AuthReducer(initialState, {
            type: actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS,
            response: {
                _id: 'abc',
                username: 'abc',
                email: 'aa@abc.com',
                role: 'user'
            }
        });
        expect(state).toEqual(expectedState);
    })
});