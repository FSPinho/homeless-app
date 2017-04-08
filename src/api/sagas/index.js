import {fork} from 'redux-saga/effects';
import route from 'api/sagas/route';

function* _sagas() {
    yield fork(route);
}

export default _sagas;
