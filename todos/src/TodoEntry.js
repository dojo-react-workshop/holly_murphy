import React, { Component } from 'react';

class TodoEntry extends Component {


  addTodo = (e) => {  
    if(e.keyCode === 13){
      this.props.addTodo(e.target.value)
    }else{
      this.props.updateDisplayTxt(e.target.value)
    }
  }
  render() {

    return (
     
        <section className='main'>
          <input type='search'  value={this.props.data.displayTxt} className='new-todo'  placeholder='What needs to be done?' onKeyDown={this.addTodo} onChange={this.addTodo} />
        </section>
    
    );
  }
}

export default TodoEntry;
