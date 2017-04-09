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
            <div>

                <Toolbar hideActions={true}/>

                <div
                    style={{
                        padding: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Paper style={{ overflow: 'hidden' }}>
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
