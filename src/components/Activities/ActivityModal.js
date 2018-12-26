import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import ActivityForm from './ActivityForm';

class ActivityModal extends Component {
      
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.modalHeader === this.props.modalHeader){
        return false
    }
    return true
  }
  
  render() {
    return (
        <Modal
            header={this.props.modalHeader}
            className="modal"
            fixedFooter
            actions={
                <div>
                    <Button modal="close"
                            className="green darken-2"
                            onClick={this.props.handleAddActivity}>
                        {this.props.modalAction}
                    </Button>
                    
                    <Button flat modal="close" waves="light">Cancel</Button>
                </div>
            }
            trigger={this.props.children}>
            <ActivityForm handleInputChange={this.props.handleInputChange} 
                          handleDateChange={this.props.handleDateChange}/>
        </Modal> 
    )
  }
}

export default ActivityModal;
