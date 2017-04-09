export const getPathFromAlias = (route, alias) => {
    return (route.alias === alias) ? (
        route.path
    ) : (
        Object.keys(route.routes).map(k => (
            getPathFromAlias(route.routes[k], alias)
        )).filter(path => !!path)[0]
    );
}