import {createRoutes, join} from './util';

it('Verify if methods are defined', () => {
    expect(createRoutes).toBeDefined();
    expect(join).toBeDefined();
});

it('Verify if method join is working', () => {
    expect(join('a', 'b')).toBe('a/b');
    expect(join('a///', '///b')).toBe('a/b');
});

it('Verify if method createRoutes is working', () => {
    expect(
        createRoutes({
            alias: 'route-a',
            routes: {
                b: {
                    alias: 'route-b'
                }
            }
        })
    ).toEqual({
        alias: 'route-a',
        path: '/',
        redirectToFirstChild: false,
        navLink: false,
        private: false,
        component: 'div',
        routes: {
            b: {
                alias: 'route-b',
                path: '/b',
                redirectToFirstChild: false,
                navLink: false,
                private: false,
                component: 'div',
                routes: {},
            }
        },
    });
});