import React, { Component } from 'react';
import { Col, Card } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import Row from 'react-materialize/lib/Row';
import { connect } from 'react-redux';
import * as actions from '../../store/User/actions';
import GoogleLogin from '../login/Google';
import FacebookLogin from '../login/Facebook';


class Login extends Component {
  
  constructor(props){
      super(props);
      this.responseSocialLogin = this.responseSocialLogin.bind(this);
  }

  responseSocialLogin = (response) => {
    if(response.accessToken){
        response.isUserLoggedIn = true;
        this.props.registerUser(response);
    }
  }

  render() {
    const { isUserLoggedIn } = this.props;

    if(isUserLoggedIn === true){
        return(
            <Redirect to='/' />
        )
    }
    return (
      <div className="container loginCard">
        <Row>
            <Col s={3}></Col>
            <Col s={6} className="center-align">
                <Card className='white'
                    textClassName='red-text' 
                    actions={
                        [
                            <div className="brandButton" key="facebook"><FacebookLogin responseFacebook={this.responseSocialLogin}/></div>,
                            <div className="brandButton" key="google"><GoogleLogin responseGoogle={this.responseSocialLogin}/></div>
                        ]
                    }
                    title='Weather Forecast App Login'>
                    This is Weather forecast App, please login to one of the following social networks.
                </Card>
            </Col>
        </Row>
        
        
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.user.isUserLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      registerUser: (payload) => { dispatch(actions.registerUser(payload))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
