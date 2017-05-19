/**
 * Created by az on 2017/5/19.
 */
import {URL} from '../../common/const'

export async function fetchUserInfo(payload) {
    let requestBody = {
        userId: payload.userId
    };
    console.log('Tag fetched :' + URL + '/api/v1/user/');
    const result = await fetch(URL + '/api/v1/user/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'bearer ' + payload.jwt,
        },
        body: bodyJSON,
    }).then(res => {
        return res.json();
    });
}
