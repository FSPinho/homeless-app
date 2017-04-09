import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Redirect} from 'react-router';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';
import {createRoutes} from 'components/routers/util';

class HomelessAppRoute extends BaseComponent {

    render() {

        return (
            <Route path={this.props.path} render={
                props => (
                    <this.props.component>
                        {Object.keys(this.props.routes).map(k => (
                            <HomelessAppRoute key={k} {...this.props.routes[k]} />
                        ))}
                    </this.props.component>
                )
            }/>
        )
    }
}

export default connect((store) => ({store}), dispatchers)(HomelessAppRoute);