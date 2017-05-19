/**
 * Created by az on 2017/5/19.
 */
import React , { components } from 'react';

import { app } from '../../core/setupApp'
import {fetchUserInfo} from './api'

const initState = ()=> ({
    currentUser: {
        userName: '',
        userId: ''
    }
})

app.model({
    namespace: 'user',
    state: initState(),
    effects : {
        *fetchUser({payload}, {call, put}){
            const user = yield call(fetchUserInfo, payload);

            yield put({
                type: 'setUpCurrentUser',
                payload: {
                    userName: user.userName,
                    userId: userId
                }
            })
        }
    },
    reducers: {
        setUpCurrentUser(state, {payload}){
            return {
                ...state,
                currentUser: {
                    userName: payload.userName,
                    userId: payload.userId
                }
            }
        }
    }
})
