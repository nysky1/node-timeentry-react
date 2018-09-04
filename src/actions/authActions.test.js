import 'jest-localstorage-mock';
import * as actions from './index';
import apiMiddleware from '../middleware/api-middleware';
import asyncMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import appConfig from '../config/appConfig';
import { fetchUserBasicInfo, createUser, fetchUserLogin } from './authActions';

const middlewares = [
    asyncMiddleware,
    apiMiddleware,
];

const mockStore = configureStore(middlewares);

describe('User specific action creators', () => {
    afterEach(() => {
        sessionStorage.clear();
        fetch.resetMocks();
    });

    describe('Ensure user can login', () => {
        it('Should validate the users login', () => {
            const store = mockStore({});

            const sendToken = 'dummy token';
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);

            const response = {
                "token":"tokenvalue","_id":"5b1f2f3cdc29df2c33982aa8","email":"bba@bb.com","username":"user","role":"user"
            };

            const username = {username:'user',password:'password'}

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(fetchUserLogin(username))
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_LOGIN_ENDPOINT}`, {
                        body: JSON.stringify({username}),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: 'POST'  
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_LOGIN_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_LOGIN_REQUEST_SUCCESS, response });
                })
        })
    })
    describe('Get basic info for a User', () => {
        it('Should validate the logged in user', () => {
            const store = mockStore({});

            const sendToken = 'dummy token';
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);

            const response = {
                "_id": "5b1f2f3cdc29df2c33982aa8", "email": "bba@bb.com", "username": "abc", "role": "user"
            };

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(fetchUserBasicInfo())
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_VALIDATE_ENDPOINT}`, {
                        headers: {
                            Authorization: `Bearer ${sendToken}`,
                            'Content-Type': 'application/json',
                        }
                    })

                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS, response });

                })

        })
    })
    describe('Add a User', () => {
        it('Should create a user', () => {
            const store = mockStore({});

            const sendToken = 'dummy token';
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);

            const response = {
                "_id":"5b8dd297eadf442aca54a8ec","username":"abcdef","firstName":"Test","lastName":"Test","email":"aaa@bb.com","role":"user","activities":[]
            };

            const firstName = {firstName:"Test",lastName:"Test", email:"aaa@bb.com", username:"abcdef", password:"12345678"};

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(createUser(firstName))
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_ENDPOINT}`, {
                        body: JSON.stringify({firstName}),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST'
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_SIGNUP_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.CREATE_USER_REQUEST_SUCCESS, response });
                })

        })
    })


})
