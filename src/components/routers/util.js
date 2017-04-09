const _baseRoute = {
    alias: '',
    path: '',
    redirectToFirstChild: false,
    navLink: false,
    private: false,
    component: 'div',
    routes: {},
};

export const join = (...args) => (
    args.reduce((a, b) => (
        a + '/' + b
    )).replace(/\/+/g, '/')
);

export const createRoutes = (route, path = '/') => {
    const _route = { ..._baseRoute, ...route, path }
    Object.keys(_route.routes).map(k => _route.routes[k] = createRoutes(_route.routes[k], join(_route.path, k)));
    return _route;
}