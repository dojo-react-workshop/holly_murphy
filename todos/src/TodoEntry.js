import React, { Component } from 'react';

class TodoEntry extends Component {

 

  addTodo = (e) => {
    
    if(e.keyCode === 13){
      this.props.addTodo(e.target.value)
    }
  }
  render() {

    return (
      <header className='header'>
        <input className='toggle-all' type='checkbox' />
        <input type='search'  className='new-todo' placeholder='What needs to be done?' onKeyDown={this.addTodo} />
      </header>
    );
  }
}

export default TodoEntry;
