import React from 'react';
import {connect} from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';

class Login extends BaseComponent {

    onTouchTap = () => {
        this.props.routeDispatcher.do.navigate(this.props.href);
    }

    render() {

        return (
            <div onTouchTap={this.onTouchTap}>
                {this.props.children}
            </div>
        )
    }
}

const themeWrapper = muiThemeable()(Login);
export default connect((store) => ({store}), dispatchers)(themeWrapper);