import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <label>Project: </label>
        <selection>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="volunteer">Volunteer</option>
        </selection>
        <label>Description: </label>
      </div>
    );
  }
}

export default Form;