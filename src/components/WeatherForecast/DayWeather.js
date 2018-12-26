import React, { Component } from 'react';
import { Row, Col, Preloader} from 'react-materialize';
import ShareWeatherForecast from './ShareWeatherForecast';

const WeatherApiIcon = 'https://openweathermap.org/img/w/';

export class Temp extends Component {
    render(){
        const { temp } = this.props;
        return (
            <span>
                {temp}<span>&#8451;</span>
            </span>
        )
    }
}

export class DayWeather extends Component {
  
  constructor(props){
      super(props);
      this.today = this.today.bind(this);
  }
  
  today = () => {
    const today = this.props.date ? new Date(this.props.date * 1000) : new Date();
    const date = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;
    return date;
  }
  render() {
    const { weather, main } = this.props;
    return (
        <div className="col m6 offset-m3 weather-card">
          <div className="card light-blue lighten-2 white-text">
            <div className="card-content">
              <div className="card-title">Weather Forecast
                <span className="right">{this.today()}</span>
              </div>
              {
                  main.temp ? 
                  (
                    <div>
                      <div className="row temperatureElem">
                        <div className="col m8">
                            <h1>
                                <img alt="Weather Icon" src={WeatherApiIcon + weather.icon + '.png'} />
                                <Temp temp={main.temp}/>
                            </h1>
                        </div>
                        <div className="col m4 valign-wrapper">
                            <h6>Min : <Temp temp={main.temp_min}/></h6>
                            <h6>Max : <Temp temp={main.temp_max}/></h6>
                        </div>
                        
                      </div>
                      <div className="row">
                        <Col m={12}>
                            <h5 className="center-align">{weather.main} - {weather.description}</h5>
                        </Col>
                        <Col m={10}>
                            Share today's weather by clicking following icon. 
                        </Col>
                        <Col m={2}>
                            <ShareWeatherForecast dt={this.today()} temp={main.temp} summary={weather.description} className="left-align" />
                        </Col>
                      </div>
                    </div>
                    
                  ) 
                  :
                  (
                    <Row className="center-align">
                        <Col s={4} className="valign-wrapper">
                            <Preloader size='big'/>
                        </Col>
                    </Row>
                  ) 
              }
            </div>
          </div>
        </div>
         
        
    )
  }
}

