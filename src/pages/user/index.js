/**
 * Created by az on 2017/4/18.
 */
import React, {Component} from 'react'

import Navigation from '../../components/navigation/'
import {connect, dispatch} from '../../core/setupApp'

export default class User extends Component {

    render() {
        return (
            <div>
                <Navigation/>
            </div>
        )
    }
}