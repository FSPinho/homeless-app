import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Redirect} from 'react-router';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';

class HomelessAppRouter extends BaseComponent {

    createRoute = url => {
        if (!url) return null;

        const urls = Object.keys(url.urls).map(k => url.urls[k]);
        return (
            <div key={`wrapper-${url.path}`}>
                {urls.length ? <Redirect key={`redirect-${url.path}`} from={url.path} to={urls[0].path}/> : ''}
                {urls.length ?
                    (
                        <Route key={`route-${url.path}`} path={url.path}>
                            {React.createElement(url.component || 'div', null, urls.map(this.createRoute))}
                        </Route>
                    ) : (
                        <Route key={`route-${url.path}`} path={url.path} component={url.component}/>
                    )
                }

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