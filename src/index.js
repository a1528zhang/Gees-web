import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Router from './router';
import {app,dispatch} from './core/setupApp';
import './models'
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

const customTheme = getMuiTheme({
    appBar: {
        color: '#2196F3',
        textColor: '#ffffff',
    }
});

injectTapEventPlugin();

app.router(({ history }) => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
            <Router history={history}/>
        </MuiThemeProvider>
    );
});
app.start('#root');