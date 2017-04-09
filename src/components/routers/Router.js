import React from 'react';
import {connect} from 'react-redux';
import {Router, Redirect} from 'react-router';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';
import Route from 'components/routers/Route';

class HomelessAppRouter extends BaseComponent {

    render() {
        const routeConfig = this.getRouteConfig();

        return (
            <Router history={this.props.history}>
                <Route {...routeConfig} />
            </Router>
        )
    }
}

export default connect((store) => ({store}), dispatchers)(HomelessAppRouter);