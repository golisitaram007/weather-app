import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import isAfter from 'date-fns/isAfter';
import 'react-datepicker/dist/react-datepicker.css';


export default class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      isRange: false
    };
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (isAfter(startDate, endDate)) {
      endDate = startDate;
    }

    this.setState({ startDate, endDate });
    this.props.getRange({ startDate, endDate });
  };

  handleChangeStart = startDate => this.handleChange({ startDate });

  handleChangeEnd = endDate => this.handleChange({ endDate });

  handleisRange = e => {
      this.setState({
        ...this.state,
        isRange: e.target.checked
      });
      this.props.getRange({isRange: e.target.checked});
  }


  render() {
    return (
      <div className="row">
        <div className="col s6">
          <label>Select Start Date</label><br/>
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            placeholder="Select Start Date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="col s6">
          <label>Select End Date</label><br/>
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            placeholder="Select End Date"
            disabled={!this.state.isRange}
            dateFormat="dd/MM/yyyy"
          />
          <p>
            <label>
                <input type="checkbox" className="filled-in" onChange={this.handleisRange}/>
                <span>Select Range</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}