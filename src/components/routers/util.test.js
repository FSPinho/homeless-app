import {createUrl, createUrls}from './util.js';

it('Url creator', () => {
    expect(createUrl('')).toBe('');
    expect(createUrl('/')).toBe('/');
    expect(createUrl('homless-app/', '//home')).toBe('homless-app/home');

    expect(createUrls({
        component: null,
        urls: {
            auth: {
                urls: {
                    login: { navAction: true },
                    register: { alias: 'register' }
                }
            }
        }
    })).toEqual({
        alias: '',
        navAction: false,
        navLink: false,
        private: false,
        component: null,
        path: '/',
        urls: {
            auth: {
                alias: '',
                navAction: false,
                navLink: false,
                private: false,
                component: null,
                path: '/auth',
                urls: {
                    login: {
                        alias: '',
                        navAction: true,
                        navLink: false,
                        private: false,
                        component: null,
                        path: '/auth/login',
                        urls: {}
                    },
                    register: {
                        alias: 'register',
                        navAction: false,
                        navLink: false,
                        private: false,
                        component: null,
                        path: '/auth/register',
                        urls: {}
                    }
                }
            }
        }
    });
});
