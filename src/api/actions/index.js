import {join, createAction, createDispatcher} from 'api/actions/util';

const GENERAL = 'GENERAL';
const general = {
    appLoad: join(GENERAL, 'APP_LOAD'),
};

const ROUTE = 'ROUTE';
const route = {
    createRouteConfig: join(ROUTE, 'CREATE_ROUTE_CONFIG'),
    navigate: join(ROUTE, 'NAVIGATE'),
};

export const actions = {
    general: createAction(general),
    route: createAction(route),
}

export const dispatchers = createDispatcher({
    'generalDispatcher': general,
    'routeDispatcher': route,
});