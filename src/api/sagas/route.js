import {takeLatest} from 'redux-saga/effects';
import {call, put, select} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {actions} from 'api/actions';
import {getPathFromAlias} from 'api/sagas/util';

function* _doNavigate(action) {
    const store = yield select();
    const {payload: alias} = action;
    const routeConfig = yield store.route.getIn(['routeConfig']).toJS();
    const path = getPathFromAlias(routeConfig, alias);
    yield put(push(path));
}

export default function* route() {
    yield takeLatest(actions.route.do.navigate, _doNavigate);
}
