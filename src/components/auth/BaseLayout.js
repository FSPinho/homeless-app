import React from 'react';
import {connect} from 'react-redux';
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from 'react-redux-firebase'
import Paper from 'material-ui/Paper';

import BaseComponent from 'components/BaseComponent';
import {actions, dispatchers} from 'api/actions';
import Toolbar from 'components/Toolbar';
import * as colors from 'material-ui/styles/colors';

class BaseLayout extends BaseComponent {

    render() {
        return (
            <div style={{
                backgroundColor: colors.blueGrey50,

                position: 'absolute',
                top: 0, bottom: 0,
                left: 0, right: 0,
                overflow: 'auto'
            }}>
                <Toolbar hideActions={true}/>

                <div
                    style={{
                        padding: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Paper>
                        {this.props.children}
                    </Paper>
                </div>


            </div>
        );
    };

}

const wrapper = firebaseConnect([
    '/public'
])(BaseLayout)

export default connect((store) => ({store}), dispatchers)(wrapper);
