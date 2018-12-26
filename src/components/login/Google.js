import React, { Component } from 'react';
import config from './config';
import ReactGoogleLogin from 'react-google-login';


class GoogleLogin extends Component{
    
    render(){
        return(
            <ReactGoogleLogin
                clientId={config.google}
                buttonText="Login with Google"
                onSuccess={this.props.responseGoogle}
                onFailure={this.props.responseGoogle}>
            </ReactGoogleLogin>
            
        )
    }
}

export default GoogleLogin;