import React, { Component } from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './components/views/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './components/views/Routes';
import { connect } from 'react-redux';
import Login from './components/views/Login';

class App extends Component {
  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <Router>
        {isUserLoggedIn === true ? 
          (
            <div className="WeatherForecastApp">
              <Navbar />
              <div className="container mainSection"><AppRouter /></div>
            </div>
          ) : (
            <Login />
          )}
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.user.isUserLoggedIn
  }
}


export default connect(mapStateToProps, null)(App);
