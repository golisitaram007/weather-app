import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Activities from "../Activities/Activities";
import Login from "./Login";
import { connect } from 'react-redux';
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const PrivateRoute = ({component: Component, ...rest}) => {
  const { isUserLoggedIn } = rest;
  return (
    <Route {...rest} render={(props) => (
      isUserLoggedIn === true ?
        <Component {...props} />
        :
        <Redirect to='/' />
    )} />
  )
}

class AppRouter extends Component {
  render(){
    const { isUserLoggedIn } = this.props;
    return (
      <div>
        <Switch>
          <PrivateRoute path="/" exact component={Home} isUserLoggedIn={isUserLoggedIn}/>
          <PrivateRoute path="/activities" exact component={Activities} isUserLoggedIn={isUserLoggedIn}/>
          <PrivateRoute path="/weatherforecast" exact component={WeatherForecast} isUserLoggedIn={isUserLoggedIn}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.user.isUserLoggedIn
  }
}

export default withRouter(connect(mapStateToProps, null)(AppRouter));