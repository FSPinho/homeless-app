import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from 'react-redux-firebase'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';

class Toolbar extends BaseComponent {

    render() {

        const logged = (
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <Link to="/"><MenuItem primaryText="Logout"/></Link>
            </IconMenu>
        );

        const notLogged = (
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <Link to="/"><MenuItem primaryText="Login"/></Link>
            </IconMenu>
        );

        return (
            <AppBar
                title={this.getString('generalAppName')}
                iconElementRight={this.props.hideActions ? null : (this.isAuth() ? logged : notLogged)}
            >

            </AppBar>
        );
    };

}

const wrapper = firebaseConnect([
    '/public'
])(Toolbar)

export default connect((store) => ({store}), dispatchers)(wrapper);

