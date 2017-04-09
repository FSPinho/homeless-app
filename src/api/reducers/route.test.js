import React from 'react';
import route, {initialState} from './route';
import {actions} from 'api/actions';

it('Verify initial state', () => {

    expect(
        route(undefined, {})
    ).toEqual(initialState);

});

it('Verify createRoutes reducer', () => {

    expect(
        route(initialState, {type: actions.route.do.createRoutes, payload: {a: 'b'}})
    ).toEqual(initialState.mergeDeep({urls: {a: 'b'}}));

});