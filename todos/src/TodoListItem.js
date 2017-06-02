import React, { Component } from 'react';

class TodoListItem extends Component {
    makeEditable=(e)=>{
        e.target.value=''
        alert('inhere')
    }

    removeTodo=(e)=>{
        
        console.log(`remove: `,e.target.id)
        this.props.removeTodo(e.target.id)
    }

  render() {
    let list=[];

    if(this.props.data.filter === 'all'){
        this.props.data.items.forEach((val, ind)=>{
            list.push(
                <div key={ind} >
                    <li>
                        <input className='toggle' type='checkbox' checked={val.completed} />
                        <label onDoubleClick={this.makeEditable}>{val.text}</label>
                        <button id={val.id} className='destroy' onClick={this.removeTodo}></button>
                    </li>
                </div>
            )//list.push
        })//for each
    }//if
    

    return (<div>
            {list}
      </div>
    );
  }
}

export default TodoListItem;