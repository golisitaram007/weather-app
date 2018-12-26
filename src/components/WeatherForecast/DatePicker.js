import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Input } from 'react-materialize';
import M from 'materialize-css';

const methods = {
    componentDidMount(props) {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.getElementById('#date');
            M.Datepicker.init(elems, {
            autoClose	: true,
            onSelect: props.handleDateChange,
            format: 'd/mm/yyyy'
            });
        });
    }
  }

const DatePicker = (props) => {
  const { date } = props.defaultValue
  return (
    <Input label="Select Date" id="date" placeholder="Select Date" className="datepicker" s={12} defaultValue={date}/>
  )
}

export default lifecycle(methods)(DatePicker);
