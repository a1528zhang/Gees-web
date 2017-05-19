/**
 * Created by az on 2017/5/19.
 */
import React, {component} from 'react'
import app from '../../core/setupApp'

const initState = ()=> ({
    tables: [],
    total: 0
})

app.model({
    nameSpace: 'table',
    state: initState(),
    effects: {
        *enterHall({payload}, {call}){
            yield call()
        }
    },
    reducers: {

    }
})