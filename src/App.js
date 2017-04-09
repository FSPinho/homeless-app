import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reactReduxFirebase, firebaseStateReducer} from 'react-redux-firebase';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import reducers from 'api/reducers';
import sagas from 'api/sagas';
import {actions} from 'api/actions';
import {createRoutes} from 'components/routers/util';
import Router from 'components/routers/Router';

import BaseLayout from 'components/BaseLayout'
import BaseAuthLayout from 'components/auth/BaseLayout'
import Login from 'components/auth/Login'
import Register from 'components/auth/Register'


class App extends Component {

    constructor(props) {
        super(props);

        const sagaMiddleware = createSagaMiddleware({
            onError: (error) => { },
        });

        const rootReducer = combineReducers({
            ...reducers,
            firebase: firebaseStateReducer,
            routing: routerReducer,
        });

        const config = {
            apiKey: 'AIzaSyCHgpf6gVX8bV_GtU8QyQMETf9bLt3PfJY',
            authDomain: 'homeless-app-60c8a.firebaseapp.com',
            databaseURL: 'https://homeless-app-60c8a.firebaseio.com',
            projectId: 'homeless-app-60c8a',
            storageBucket: 'homeless-app-60c8a.appspot.com',
            messagingSenderId: '428503372541'
        };

        this.history = createHistory();

        const middlewares = [
            routerMiddleware(this.history),
            sagaMiddleware,
        ];

        const createStoreWithFirebase = compose(
            reactReduxFirebase(config, {userProfile: 'users'}),
            applyMiddleware(...middlewares)
        )(createStore);

        this.store = createStoreWithFirebase(rootReducer, {})

        sagaMiddleware.run(sagas);
    }

    componentWillMount() {
        const routeConfig = createRoutes({
            alias: 'route-base',
            component: BaseLayout,
            routes: {
                auth: {
                    alias: 'route-auth',
                    component: BaseAuthLayout,
                    routes: {
                        login: {
                            alias: 'route-login',
                            component: Login
                        },
                        register: {
                            alias: 'route-register',
                            component: Register
                        }
                    }
                },
            }
        });

        this.store.dispatch({
            type: actions.route.do.createRouteConfig,
            payload: routeConfig
        });
    }

    render() {

        return (
            <Provider store={this.store}>
                <Router history={this.history}/>
            </Provider>
        );
    }
}

export default App;
