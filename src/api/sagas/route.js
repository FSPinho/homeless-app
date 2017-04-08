import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import {actions} from 'api/actions';

function* _doNavigate(action) {
    console.log('Navigate Saga');
}

export default function* route() {
    takeLatest(actions.route.do.navigate, _doNavigate);
}
