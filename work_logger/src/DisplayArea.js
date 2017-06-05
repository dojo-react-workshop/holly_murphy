import React, { Component } from 'react';
import DisplayBoxes from './DisplayBoxes'

class DisplayArea extends Component {
  render() {
    return (
      <div className="displayArea">
        <DisplayBoxes />
      </div>
    );
  }
}

export default DisplayArea;