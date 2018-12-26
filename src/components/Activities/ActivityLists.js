import React, { Component } from 'react';
import { Table, Col, Card } from 'react-materialize';
import TableRow from './TableRow';

class ActivityLists extends Component{
  
  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.activities === this.props.activities){
      return false
    }
    return true
  }

  render() {
    const {activities} = this.props;
    return (
      <div>
        { 
          activities.length > 0 ? 
            (
              <Table className="centered">
                <thead>
                  <tr>
                    <th data-field="title">Title</th>
                    <th data-field="ativity">Activity</th>
                    <th data-field="date">Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    activities.map((row, ind) => {
                      return <TableRow tr={row} key={ind} /> 
                    })
                  }
                  
                </tbody>
              </Table>
            )
            :
            <Col m={12}>
              <Card>You don't have any activities yet.</Card>
            </Col>
        }
        
      </div>
    )
  }
}


export default ActivityLists