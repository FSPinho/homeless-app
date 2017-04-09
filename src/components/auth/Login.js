import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PersonIcon from 'material-ui/svg-icons/social/person';
import {firebaseConnect} from 'react-redux-firebase';
import * as colors from 'material-ui/styles/colors';

import BaseComponent from 'components/BaseComponent';
import Link from 'components/Link';
import {actions, dispatchers} from 'api/actions';

class Login extends BaseComponent {

    state = {
        canSubmit: false
    }

    submit = model => {
        this.props.firebase.login(model)
    }

    enableSubmit = () => {
        this.setState({
            canSubmit: true
        });
    }

    disableSubmit = () => {
        this.setState({
            canSubmit: false
        });
    }

    render() {

        const fieldStyle = {
            marginBottom: 20
        };

        const errorMessage = this.getAuthError() ? this.getAuthError().message : '';

        const error = errorMessage ? (
            <p style={{
                color: colors.red500,
                fontWeight: 200,
                textAlign: 'justify'
            }}>

                {errorMessage}

            </p>
        ): null;

        return (
            <Form onValidSubmit={this.submit} onValid={this.enableSubmit} onInvalid={this.disableSubmit}>

                <div style={{
                    padding: 20,
                    backgroundColor: this.props.muiTheme.palette.primary1Color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <PersonIcon style={{
                        color: this.props.muiTheme.palette.alternateTextColor,
                        width: 96,
                        height: 96
                    }}/>
                </div>

                <div style={{padding: 20}}>

                    {error}

                    < FormsyText
                        name="email"
                        floatingLabelText={this.getString('fieldEmailLabel')
                        }
                        floatingLabelFixed={true}
                        validationErrors={
                            {
                                'isDefaultRequiredValue': this.getString('fieldErrorRequired')
                            }
                        }
                        required
                        style={fieldStyle}
                    />

                    < br />

                    < FormsyText
                        name="password"
                        type="password"
                        floatingLabelText={this.getString('fieldPasswordLabel')
                        }
                        floatingLabelFixed={true}
                        validationErrors={
                            {
                                'isDefaultRequiredValue': this.getString('fieldErrorRequired')
                            }
                        }
                        required
                        style={fieldStyle}
                    />

                    < br />

                    < RaisedButton
                        type="submit"
                        label={this.getString('buttonLogin')}
                        secondary={true}
                        fullWidth={true}
                        style={{
                            ...fieldStyle,
                            height: 52
                        }}
                    />

                    <Link href="route-register">
                        <FlatButton
                            label={this.getString('buttonRegister')}
                            secondary={true}
                            fullWidth={true}
                        />
                    </Link>


                </div>

            </
                Form >
        )
    }
}

const firebaseWrapper = firebaseConnect()(Login)
const themeWrapper = muiThemeable()(firebaseWrapper);
export default connect((store) => ({store}), dispatchers)(themeWrapper);