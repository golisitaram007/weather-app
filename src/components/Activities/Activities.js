import React, { Component } from 'react'
import ActivityLists from './ActivityLists';
import { Button } from 'react-materialize';
import { connect } from 'react-redux';
import * as actions from '../../store/activities/actions';
import ActivityModal from './ActivityModal';


class Activities extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      activity: '',
      date: '',
      validate: false
    }
    this.handleAddActivity = this.handleAddActivity.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    this.props.readActivities();
  }

  handleAddActivity = () => {
    this.props.addActivity(this.state);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleDateChange = (date) => {
    const selectedDate = new Date(date);
    const formattedDate = `${selectedDate.getDate()}/${(selectedDate.getMonth() + 1)}/${selectedDate.getFullYear()}`;
    this.setState({
      date: formattedDate 
    });
  }
  render() {
    return (
      <div className="activities">
        <div className="row">
          <ActivityModal modalHeader="Create New Activity" 
                         modalAction='Add' 
                         handleInputChange={this.handleInputChange} 
                         handleDateChange={this.handleDateChange}
                         handleAddActivity={this.handleAddActivity}>
            <Button className="green">Create Activity</Button>  
          </ActivityModal>   
          <div className="col s12">
            <ActivityLists activities={this.props.activities} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActivity: (payload) => { dispatch(actions.addActivity(payload))},
    readActivities: () => { dispatch(actions.readActivities())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
