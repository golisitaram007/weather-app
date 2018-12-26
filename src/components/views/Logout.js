import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/User/actions';

class Logout extends Component {

  logout = () => {
      const { userInfo } = this.props;
      if(userInfo.googleId){
        const auth2 = window.gapi.auth2.getAuthInstance()
        if (auth2 != null) {
            auth2.disconnect().then(() => {
                this.props.logoutUser();
            });
            console.log("Successfully logged out from Google");
        }
      }else{
        window.FB.logout((response) => {
            console.log("Successfully logged out from Facebook");
            this.props.logoutUser();
        });
      }
      
  }
  render() {
    return (
        <Button className="waves-effect red waves-light btn" 
                onClick={() => this.logout()}>
                <Icon right className="logoutIcon">power_settings_new</Icon> 
                Logout 
        </Button>
    )
  }
}

const mapStateToProps = state => {
    return {
      userInfo: state.user.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser: () => { dispatch(logoutUser())},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);