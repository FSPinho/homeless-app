import {fromJS} from 'immutable';

import {actions} from 'api/actions';

export const initialState = fromJS({
    navigation: {
        nextUrl: '',
    },

    routeConfig: {}
});

export default (state = initialState, action) => {

    if (action.type === actions.route.do.createRouteConfig) {
        return state.mergeDeepIn(['routeConfig'], action.payload);
    }

    return state;

};