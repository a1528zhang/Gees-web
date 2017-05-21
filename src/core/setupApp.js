/**
 * Created by az on 2017/4/18.
 */
import dva from 'dva';
import createLogger from 'redux-logger';

export const dispatch = (...args) => app._store.dispatch(...args);
export const app = dva();
export { connect } from 'dva';

function onEffect(effect, {put}) {
    return function*(...args) {
        let { payload } = args[0];
        yield effect({...args, payload: payload});
    };
}

app.use({onEffect});
app.use({onAction: createLogger()});