/**
 * Created by az on 2017/5/19.
 */
import { app } from '../../core/setupApp';
import {fetchUserInfo} from './api';

const initState = ()=> ({
    currentUser: {
        userName: '',
        userId: '',
    }
});

app.model({
    namespace: 'user',
    state: initState(),
    effects: {
        *fetchUser({payload}, {call, put}) {
            /* eslint-disable no-console */
            console.log('Tag effect');
            const user = yield call(fetchUserInfo, payload);

            yield put({
                type: 'setUpCurrentUser',
                payload: {
                    userName: user.userName,
                    userId: user.userId,
                }
            });
        }
    },
    reducers: {
        setUpCurrentUser(state, {payload}) {
            /* eslint-disable no-console */
            console.log('Tag reducer :', payload);
            return {
                ...state,
                currentUser: {
                    userName: payload.userName,
                    userId: payload.userId
                }
            };
        }
    }
});
