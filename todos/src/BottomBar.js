import React, { Component } from 'react';

class BottomBar extends Component {
  render() {
    return (
        <footer className='footer'> 
         <span className='todo-count'><strong>4</strong> items left</span>
         <ul className='filters'>
             <span>All  |   </span>
             <span>Active  |   </span>
             <span>Complete</span>
        </ul>
        </footer>
    );
  }
}

export default BottomBar;