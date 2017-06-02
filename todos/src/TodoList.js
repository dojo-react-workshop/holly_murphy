import React, { Component } from 'react';
import TodoListItem from './TodoListItem'

class TodoList extends Component {

    

  render() {
    return (
        <div className='view'> 
            <ul className='todo-list'>
              <TodoListItem data={this.props.data} updateTodo={this.props.updateTodo} removeTodo={this.props.removeTodo}/>  
            </ul>
        </div>
    );
  }
}

export default TodoList;