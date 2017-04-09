import React from 'react';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';
import Route from 'components/routers/Route';

class HomelessAppRouter extends BaseComponent {

    render() {
        const routeConfig = this.getRouteConfig();

        return (
            <ConnectedRouter history={this.props.history}>
                <Route {...routeConfig} />
            </ConnectedRouter>
        )
    }
}

export default connect((store) => ({store}), dispatchers)(HomelessAppRouter);