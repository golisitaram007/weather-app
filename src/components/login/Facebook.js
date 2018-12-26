import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import config from './config';
import facebook from './facebookicon.png';


const fbStyle = {
    backgroundColor: "rgb(78, 113, 168)",
    display: "inline-flex",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",
    padding: "0px",
    borderRadius: "2px",
    border: "1px solid transparent",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif"
}
export default function Facebook(props) {
  const responseFacebook = (response) => {
      props.responseFacebook(response);
  }
  return (
    <FacebookLogin
        appId={config.facebook}
        autoLoad={false}
        fields="name,email,picture"
        render={renderProps => (
            <button style={fbStyle} className="white-text" onClick={renderProps.onClick}>
                <img src={facebook} className="brandIcon" title="Facebook login" alt="Facebook Icon" />
                &nbsp;Login with Facebook
            </button>
        )}
        callback={responseFacebook} />
        
  )
}
