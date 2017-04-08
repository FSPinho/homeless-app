import {join, createAction, createDispatcher} from 'api/actions/util';

const GENERAL = 'GENERAL';
const general = {
    appLoad: join(GENERAL, 'APP_LOAD'),
};

const ROUTE = 'ROUTE';
const route = {
    createRoutes: join(ROUTE, 'CREATE_ROUTES'),
};

export const actions = {
    general: createAction(general),
    route: createAction(route),
}

export const dispatchers = createDispatcher({
    'generalDispatcher': general,
    'routeDispatcher': route,
});