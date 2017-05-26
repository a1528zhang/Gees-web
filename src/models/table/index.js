/**
 * Created by az on 2017/5/19.
 */
import { app } from '../../core/setupApp';

const initState = ()=> ({
    tables: [],
    total: 0
});

app.model({
    namespace: 'table',
    state: initState(),
    effects: {
        *enterHall({payload}, {call}) {
            yield call();
        }
    },
    reducers: {

    }
});
