import 'jest-localstorage-mock';
import * as actions from './index';
import apiMiddleware from '../middleware/api-middleware';
import asyncMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import appConfig from '../config/appConfig';
import { fetchUserActivities, fetchUserActivity, createActivity, saveActivity, removeActivity } from './timeEntryActions';

const middlewares = [
    asyncMiddleware,
    apiMiddleware,
];

const mockStore = configureStore(middlewares);

const endpoint = appConfig.MAIN_APP_AUTHORITY;

describe('Activity specific action creators', () => {
    afterEach(() => {
        sessionStorage.clear();
        fetch.resetMocks();
    });

    describe('Ensure user can display activities', () => {
        it('Should return all user activities', () => {
            const store = mockStore({});

            const sendToken = 'dummy token'; const userIdToken = 'dummyUserId'
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);
            sessionStorage.setItem(appConfig.USER_CONTENT_KEY, userIdToken);

            const response = 
                {"_id":"5b1f2f3cdc29df2c33982aa8","username":"testuser","firstName":"first","lastName":"last","email":"bba@bb.com","role":"user","activities":[{"_id":"5b843eaf034d980e105fc1b6","activity":"1","activityDuration":"1","activityDate":"2018-10-01"},{"_id":"5b86dbd3dc7ca41cc96631f0","activity":"sdfasdf","activityDuration":"1","activityDate":"2018-10-01"}]}
            ;

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(fetchUserActivities())
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}`, {
                        headers: {
                            Authorization: `Bearer ${sendToken}`,
                            'Content-Type': 'application/json'
                        }
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_ACTIVITIES_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_ACTIVITIES_REQUEST_SUCCESS, response });
                })
        })
        it('Should return a specified activity', () => {
            const store = mockStore({});

            const sendToken = 'dummy token'; const userIdToken = 'dummyUserId'
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);
            sessionStorage.setItem(appConfig.USER_CONTENT_KEY, userIdToken);

            const eventId = 'abc';

            const response = 
                {"_id":"5b843eaf034d980e105fc1b6","activity":"1","activityDuration":"1","activityDate":"2018-10-01","createdAt":"2018-08-27T18:10:55.864Z","updatedAt":"2018-08-27T18:10:55.864Z","__v":0};

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(fetchUserActivity(eventId))
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${eventId}`, {
                        headers: {
                            Authorization: `Bearer ${sendToken}`,
                            'Content-Type': 'application/json'
                        }
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_ACTIVITY_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_ACTIVITY_REQUEST_SUCCESS, response });
                })
        })
        it('Should create an activity', () => {
            const store = mockStore({});

            const sendToken = 'dummy token'; const userIdToken = 'dummyUserId'
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);
            sessionStorage.setItem(appConfig.USER_CONTENT_KEY, userIdToken);

            const activity = 
                {activity:"New Activty",activityDate:"2018-10-01",activityDuration:"1"};
            const response = 
                {"_id":"5b1f2f3cdc29df2c33982aa8","username":"test","firstName":"first","lastName":"last","email":"bba@bb.com","role":"user","activities":["5b843eaf034d980e105fc1b6"]};

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(createActivity(activity))
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity`, {
                        headers: {
                            Authorization: `Bearer ${sendToken}`,
                            'Content-Type': 'application/json'
                        },
                        method: 'PUT',
                        body: JSON.stringify(
                            {activity: activity,
                            id: userIdToken})
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_ACTIVITY_CREATE_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_ACTIVITY_CREATE_REQUEST_SUCCESS, response });
                })
        })
        it('Should save an activity', () => {
            const store = mockStore({});

            const sendToken = 'dummy token'; const userIdToken = 'dummyUserId'
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);
            sessionStorage.setItem(appConfig.USER_CONTENT_KEY, userIdToken);

            //const eventId = '5b843eaf034d980e105fc1b6';
            const activity = 
                {activityId:"5b843eaf034d980e105fc1b6",activity:"1",activityDate:"2018-10-01",activityDuration:"2"}
            const response = "OK";

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(saveActivity(activity))
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${activity}`, {
                        headers: {
                            Authorization: `Bearer ${sendToken}`,
                            'Content-Type': 'application/json'
                        },
                        method: 'PUT',
                        body: JSON.stringify(
                            {eventId: activity,
                            id: userIdToken})
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_ACTIVITY_EDIT_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_ACTIVITY_EDIT_REQUEST_SUCCESS, response });
                     expect(dispatchedActions[2]).toEqual({ payload: {"args": ["/activities"], method: "push"}, type: '@@router/CALL_HISTORY_METHOD' });
                })
        })
        it('Should remove a specified activity', () => {
            const store = mockStore({});

            const sendToken = 'dummy token'; const userIdToken = 'dummyUserId'
            sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, sendToken);
            sessionStorage.setItem(appConfig.USER_CONTENT_KEY, userIdToken);

            const eventId = 'abc';

            const response = {};

            fetch.mockResponseOnce(JSON.stringify(response))

            return store.dispatch(removeActivity(eventId))
                .then(() => {
                    const dispatchedActions = store.getActions()
                    expect(fetch).toHaveBeenCalledWith(`${appConfig.USER_ENDPOINT}/${sessionStorage.getItem(appConfig.USER_CONTENT_KEY)}/activity/${eventId}`, {
                        headers: {
                            Authorization: `Bearer ${sendToken}`,
                            'Content-Type': 'application/json'
                        },
                        method: 'DELETE'
                    })
                     expect(dispatchedActions[0]).toEqual({ type: actions.REMOVE_USER_ACTIVITY_REQUEST_TRIGGERED });
                     expect(dispatchedActions[1]).toEqual({ type: actions.RESET_CONFIRM_MESSAGE, response });
                     expect(dispatchedActions[2]).toEqual({ payload: {"args": ["/activities"], method: "push"}, type: '@@router/CALL_HISTORY_METHOD' });
                })
        })
    })
})
