import React, {Component} from 'react';
import {Router, Route} from 'dva/router';
import User from './pages/user'

export default class Routers extends Component {
    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)} history={this.props.history}>
                <Route path='/' component={User}/>
            </Router>
        );
    }
}