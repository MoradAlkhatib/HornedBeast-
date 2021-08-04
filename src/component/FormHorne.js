import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class FormHorne extends Component {
  handleSelect = (e) => {
    //console.log(typeof(e.target.value));
    let horne = Number(e.target.value);
    this.props.formHorne(horne);

  };

  render() {
    return (
      <Form.Select
        aria-label='Default select example'
        size='lg'
        onChange={(e) => this.handleSelect(e)}
      >
        <option value='0'>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
        <option value='100'>100</option>
      </Form.Select>
    );
  }
}

export default FormHorne;
