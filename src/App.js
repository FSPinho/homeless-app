import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reactReduxFirebase, firebaseStateReducer} from 'react-redux-firebase';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from 'api/reducers';
import sagas from 'api/sagas';
import {actions} from 'api/actions';
import {createUrls} from 'components/routers/util.js';
import Router from 'components/routers/Router';

import BaseLayout from 'components/BaseLayout'
import BaseAuthLayout from 'components/auth/BaseLayout'
import Login from 'components/auth/Login';

const SYSTEM_ROUTES = {
    component: BaseLayout,
    urls: {
        auth: {
            component: BaseAuthLayout,
            urls: {
                login: {
                    navAction: true,
                    alias: 'login',
                    component: Login
                },
                register: {
                    navAction: true,
                    alias: 'register',
                    component: null
                }
            }
        }
    }
};

class App extends Component {

    constructor(props) {
        super(props);

        injectTapEventPlugin();

        const sagaMiddleware = createSagaMiddleware({
            onError: (error) => { },
        });

        const rootReducer = combineReducers({
            firebase: firebaseStateReducer,
            ...reducers,
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

        const browserHistory = createBrowserHistory();

        const middlewares = [
            routerMiddleware(browserHistory),
            sagaMiddleware,
        ];

        const createStoreWithFirebase = compose(
            reactReduxFirebase(config, {userProfile: 'users'}),
            applyMiddleware(...middlewares)
        )(createStore);

        this.store = createStoreWithFirebase(rootReducer, {})
        this.history = syncHistoryWithStore(browserHistory, this.store);

        sagaMiddleware.run(sagas);
    }

    componentWillMount() {
        this.store.dispatch({
            type: actions.route.do.createRoutes,
            payload: createUrls(SYSTEM_ROUTES)
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
