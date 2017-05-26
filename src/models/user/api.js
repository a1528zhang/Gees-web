/**
 * Created by az on 2017/5/19.
 */
import {URL} from '../../common/const';

export async function fetchUserInfo(payload) {
    // let requestBody = {
    //     userId: payload.userId
    // };
    /* eslint-disable no-console */
    console.log('Tag fetched :' + URL + '/api/v1/user/');
    console.log('Tag fetched : we got userId is '+ payload.userId);

    // const result = await fetch(URL + '/api/v1/user/', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         Authorization: 'bearer ' + payload.jwt,
    //     },
    //     body: '',
    // }).then(res => {
    //     return res.json();
    // });
    return new Promise((resolve)=> {
        resolve('ok');
    }).then(()=> {
        return {
            userName: 'testName',
            userId: '01',
        };
    });
}
