import React, { Component } from 'react';
import { Button, Modal, Row, Input, Icon } from 'react-materialize';

export default class ShareWeatherForecast extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        
    }
    handleShare = () => {

    }
    render() {
        const { dt, temp, summary } = this.props;
        const weatherToday = `${temp}${String.fromCharCode(176)} Celsius - ${summary}`;
        return (
            <Modal
                header="Share today's weather forecast"
                fixedFooter
                className="modal"
                actions={
                    <div>
                        <Button className="green darken-2"
                                onClick={() => this.handleShare}>
                            Share
                        </Button>
                        <Button flat modal="close" waves="light">Cancel</Button>
                    </div>
                }
                trigger={<Button floating className='red' waves='red' icon='share'/>}>
                <Row>
                    <Input s={12} id="email" onChange={this.handleChange} label="Email*" type="email" validate required><Icon>email</Icon></Input>
                    <Input s={6} id="firstname" onChange={this.handleChange} label="First Name*" validate required><Icon>account_circle</Icon></Input>
                    <Input s={6} id="lastname" onChange={this.handleChange} label="Last Name*" validate required></Input>
                    <Input s={12} label="Date" validate disabled defaultValue={dt}><Icon>date_range</Icon></Input>
                    <Input s={12} label="Weather Today" validate disabled defaultValue={weatherToday}><Icon>ac_unit</Icon></Input>
                </Row>
            </Modal>
        )
    }
}
