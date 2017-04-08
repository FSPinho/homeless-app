import {fromJS} from 'immutable';

import {actions} from 'api/actions';

export const initialState = fromJS({
    navigation: {
        nextUrl: '',
    },

    urls: {}
});

export default (state = initialState, action) => {

    if (action.type === actions.route.do.createRoutes) {
        return state.mergeDeepIn(['urls'], action.payload);
    }

    return state;

};