/**
 * Created by az on 2017/4/18.
 */
import dva from 'dva';
import createLogger from 'redux-logger';

export const dispatch = (...args) => app._store.dispatch(...args);
export const app = dva();
export { connect } from 'dva';

app.use({onAction: createLogger()});