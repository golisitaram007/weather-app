import React, {Component} from 'react';
import { Button, Icon, Input } from 'react-materialize';
import DatePicker from 'react-datepicker';
import {DateBuilder, DateStringToFromat} from '../common/dateBuilder';
import { connect } from 'react-redux';
import * as actions from '../../store/activities/actions';
import 'react-datepicker/dist/react-datepicker.css';

class TableRow extends Component {
    constructor(props){
      super(props);
      this.state = {
        isEditable: false,
        date: new Date(),
        title: '',
        activity: '',
        id: 0
      }
    }
    componentDidMount() {
        const { title, activity, date, id } = this.props.tr;
        this.setState({
            ...this.state,
            title, activity, id,
            date: DateBuilder(date)
        })
    }
    handleRowEdit = () => {
      const {date} = this.props.tr;
      const isEditable = this.state.isEditable;
      this.setState({
        isEditable: !isEditable,
        date: DateBuilder(date)
      })
    }
    handleDateChange = (e) => {
      this.setState({
        date: e
      })
    }
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleActivityChange = (e) => {
        this.setState({
            activity: e.target.value
        })
    }
    handleUpdate = () => {
        const payload = (({title, activity, date, id}) => ({title, activity, date, id}))(this.state);
        payload.date = DateStringToFromat(payload.date);
        this.props.updateActivity(payload);
        this.handleRowEdit();
        window.Materialize.toast(`Successfully Update - ${payload.title}`, 3000)
    }
    handleDelete = () => {
        const payload = (({title, id}) => ({title, id}))(this.state);
        this.props.deleteActivity(payload);
        window.Materialize.toast(`Successfully deleted - ${payload.title}`, 3000);
    }
    render() {
      const { tr } = this.props;
      const { isEditable } = this.state;
      return (
        <tr>
          <td>
            { 
              isEditable === true ? 
                (<Input m={12} label="Title" id="title" defaultValue={tr.title} onChange={this.handleTitleChange} />)
                :
                <span>{tr.title}</span>
            }
          </td>
          <td>
            { 
              isEditable === true ? 
                (<Input m={12} label="Activity" id="activity" defaultValue={tr.activity} onChange={this.handleActivityChange}/>)
                :
                <span>{tr.activity}</span>
            }
          </td>
          <td>
            { 
              isEditable === true ? 
                (
                  <DatePicker
                      s={12}
                      selected={this.state.date}
                      onChange={this.handleDateChange}
                      placeholder="Select Start Date"
                      dateFormat="dd/MM/yyyy"
                    />
                )
                :
                <span>{tr.date}</span>
            }
          </td>
          <td>
            
            {
              isEditable === true ?
                ( <span>
                    <Button floating className="green" onClick={this.handleUpdate}><Icon>save</Icon></Button>
                    <Button floating className="orange" onClick={this.handleRowEdit}><Icon>undo</Icon></Button>
                  </span>
                )
                :
                (
                  <Button floating 
                    waves="light" 
                    className="orange lighten-2"
                    onClick={this.handleRowEdit}><Icon className="white-text">edit</Icon></Button>
                )
            }
            
            <Button floating waves="light" onClick={this.handleDelete} className="red"><Icon className="white-text">delete</Icon></Button>
          </td>
        </tr>
      )
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        updateActivity: (payload) => { dispatch(actions.updateActivity(payload)) },
        deleteActivity: (payload) => { dispatch(actions.deleteActivity(payload)) }
    }
}


export default connect(null, mapDispatchToProps)(TableRow);