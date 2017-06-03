import React, { Component } from 'react';
import TodoListItem from './TodoListItem'

class TodoList extends Component {

    

  render() {
    return (
      <section className='main'>
        <input id='toggle-all' className='toggle-all' type='checkbox' onClick={this.props.markAllComplete} />
        <ul className='todo-list'>
          <TodoListItem makeEditable={this.props.makeEditable} data={this.props.data} updateTodo={this.props.updateTodo} removeTodo={this.props.removeTodo} makeComplete={this.props.makeComplete}/>  
        </ul>
      </section>
    );
  }
}

export default TodoList;