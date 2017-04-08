import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Redirect} from 'react-router';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class BaseLayout extends BaseComponent {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    };

}
;

export default connect((store) => ({store}), dispatchers)(BaseLayout);

