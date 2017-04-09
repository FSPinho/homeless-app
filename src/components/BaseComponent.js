import React, {Component} from 'react';
import {dataToJS} from 'react-redux-firebase'

class BaseComponent extends Component {

    getString = (res, ...args) => {
        const lg = dataToJS(this.props.store.firebase, '/public/currentLanguage');
        const resources = dataToJS(this.props.store.firebase, '/public/resources/strings');

        const s = (lg && resources && resources[res])? (resources[res][lg] || resources[res]['default']): res;
        return s.split(/\$\d/).reduce((a, b, i) => a + args[i - 1] + b);
    }

    getRouteConfig = () => {
        const {store: {route}} = this.props;
        return route ? route.get('routeConfig').toJS() : null;
    }

    isAuth = () => {
        return !!dataToJS(this.props.store.firebase, '/auth');
    }

    render() {
        return (this.props.children);
    };

}

export default BaseComponent;

