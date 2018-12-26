import React, { Component } from 'react';
import { Row, Button, Col, Card, ProgressBar } from 'react-materialize';
import DateRange from './DateRange';
import { connect } from 'react-redux';
import DayWeatherList from './DayWeatherList';

const WEATHER_API = 'https://api.darksky.net/forecast/';
const KEY = '7ae68e9f291258db1415b009fcae71c3'

const getDateRangeEpoch = (start, end) => {
  const dates = [];
  let currentDate = new Date(start);
  while(currentDate <= end){
      dates.push(Math.round(currentDate.getTime() / 1000));
      currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1,
      );
  }
  return dates;
}

class WeatherForecast extends Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      isRange: false,
      weatherData: [],
      showData: false
    };
  }
  componentDidMount() {
      
  }
  handleRange = (val) => {
    this.setState({
      ...this.state,
      ...val
    })
  }

  getWeatherInfo = (dates, lat, lon) => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'; // Enabling CORS requests
    const url = `${WEATHER_API}${KEY}/${lat},${lon},`;
    const fetchMap$ = dates.map(date => {
      const params = {
        exclude: 'hourly,daily',
        units: 'si'
      }
      const BUILT_URL = new URL(proxyURL + url + date);
      Object.keys(params).forEach(key => BUILT_URL.searchParams.append(key, params[key]))
      return fetch(BUILT_URL).then(res => res.json())
    });
    Promise.all(fetchMap$).then(res => {
      const weatherData = res;
      this.setState({
        ...this.state,
        weatherData
      })
    })
  }

  handleGetRange = () => {
    const { startDate, endDate } = this.state;
    const end = this.state.isRange ? endDate : startDate;
    const dates = getDateRangeEpoch(startDate, end);
    this.setState({
      ...this.state,
      weatherData: [],
      showData: true
    });
    if(!this.props.coords.lat){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude , longitude } = pos.coords;
          this.getWeatherInfo(dates, latitude, longitude);
        })
      }
    }else{
      const {lat, lon} = this.props.coords;
      this.getWeatherInfo(dates, lat, lon);
    }
    
  }
  render() {
    return (
      <div>
        <h5>Forecasting Weather information by dates.</h5>
        <Col m={12}>
          <Card>
            <Row>
              <div className="col s8">
                <DateRange getRange={this.handleRange}/>
              </div>
              <div className="col s2">
                <Button className="green" onClick={this.handleGetRange}>Get Forecast</Button>
              </div>
              <div className="col s2">
                <Button className="red" onClick={() => this.props.history.push('/')}>Cancel</Button>
              </div>
            </Row>
          </Card>
        </Col>
        { this.state.showData === true ? (
            <Col m={12}>
              <Card>
                {this.state.weatherData.length > 0 ? 
                    <DayWeatherList weather={this.state.weatherData}/>
                    :
                    <ProgressBar />
                }
              </Card>
            </Col>
        ) : null
      }
        
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    coords: state.weather.coords
  }
}

export default connect(mapStateToProps, null)(WeatherForecast)