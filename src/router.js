import React, {Component} from 'react';
import {Router, Route} from 'dva/router';
import User from './pages/user'
import Navigation from './components/navigation/'

export default class Routers extends Component {
    static propTypes = {
        history: React.PropTypes.object,
    }

    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)} history={this.props.history}>
                <Route path='/' component={Navigation}/>
                <Route path='/user' component={User}/>
            </Router>
        );
    }
}