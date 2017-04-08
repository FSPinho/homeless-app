import React from 'react';
import { connect } from 'react-redux';
import {Router, Route, Redirect} from 'react-router';

import BaseComponent from 'components/BaseComponent';
import { actions, dispatchers } from 'api/actions';

class HomelessAppRouter extends BaseComponent {

    constructor(props) {
        super(props);
    }

    createRoute = url => {
        if(!url) return null;

        const urls = Object.keys(url.urls).map(k => url.urls[k]);
        return (
            <div key={`wrapper-${url.path}`}>
                {urls.length ? <Redirect key={`redirect-${url.path}`} from={url.path} to={urls[0].path}/> : ''}
                <Route key={`route-${url.path}`} path={url.path} component={url.component}>
                    <div>
                        {urls.map(this.createRoute)}
                    </div>
                </Route>
            </div>
        );
    }

    render() {
        const urls = this.getUrls();
        return (
            <Router history={this.props.history}>
                {this.createRoute(urls)}
            </Router>
        )
    }
}

export default connect((store) => ({store}), dispatchers)(HomelessAppRouter);