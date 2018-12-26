import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DayWeather } from '../WeatherForecast/DayWeather';
import * as actions from '../../store/weatherForecast/actions';

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const API = 'https://openweathermap.org/data/2.5/weather';
const AppID = 'b6907d289e10d714a6e88b30761fae22';


class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      weather: {
        weather: [],
        main: {}
      }
    }
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.handleStateWithCoords();
  }

  getCurrentWeather = (coords) => {
    const url = new URL(PROXY_URL+API);
    const params = {
      ...coords,
      units: 'metric',
      appid: AppID
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then(resp => resp.json())
              .then(data => {
                this.setState({
                  ...this.state,
                  weather: data
                })
              })
  }

  handleStateWithCoords = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude , longitude } = pos.coords;
        this.props.updateCoords({lat: latitude, lon: longitude});
        this.getCurrentWeather({lat: latitude, lon: longitude});
      })
    }else{
       this.getCurrentWeather({q: 'Singapore,sg'});
    }
  }

  

  render() {
    const user  = this.props.userInfo;
    
    const {weather, main, dt} = this.state.weather;
    
    const [current] = weather;
    return (
      <div className="row">
        <div className="col m12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                <h3>Hello, { user.googleId ? user.profileObj.name : user.name}</h3></span>
              <p>Welcome to weather forecast app</p>
            </div>
          </div>
        </div>
        <DayWeather weather={current} main={main} date={dt}/>
        
      </div>
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
    updateCoords: (payload) => { dispatch(actions.updateCoords(payload))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


