import React, { Component } from 'react';
import { Row, Input, Col } from 'react-materialize';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {DateBuilder} from '../common/dateBuilder';


class ActivityForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    this.props.handleDateChange(this.state.date);
  }
  handleDateChange = (dt) => {
    this.setState({
      date: DateBuilder(dt)
    })
    this.props.handleDateChange(dt)
  }
  render(){
    return (
      <div className="activityForm">
        <Row>
          <Input label="Title" s={12} id="title" onChange={this.props.handleInputChange}/>
          <Input label="Activity" s={12} id="activity" onChange={this.props.handleInputChange}/>
          <Col s={12}>
            <label>Select Activity Date : </label>
            <DatePicker
                selected={this.state.date}
                startDate={this.state.date}
                onChange={this.handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date"
              />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ActivityForm;