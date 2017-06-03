import React, { Component } from 'react';

class TodoListItem extends Component {
    makeEditable=(e)=>{
        this.props.makeEditable(e.target.id)
    }

    removeTodo=(e)=>{
        this.props.removeTodo(e.target.id)
    }

    makeComplete=(e)=>{
        this.props.makeComplete(e.target.id)
    }

  render() {
    let list=[];
    let liClass = '';
    var todos = Array.from(this.props.data.items) 
    //filter the todos for display based on chosen filter
    if(this.props.data.filter === 'all' || this.props.data.filter === 'All'){
        todos=todos.filter((val)=>{
            return val.completed===true || val.completed ===false
        })
    }else if(this.props.data.filter === 'Active'){
        todos=todos.filter((val)=>{
            return val.completed===false
        })
    }else if(this.props.data.filter === 'Complete'){
        todos=todos.filter((val)=>{
            return val.completed===true
        })
    }

       todos.forEach((val, ind)=>{
            //if completed, cross out text and have the box checked
            if (val.completed === true){
                liClass='completed'
            }else{
                liClass='liClass'
            }

            //check if editable
            if(val.editable === true){
               list.push(
                    <div key={ind} >
                        <li className='editing'>
                            <div className='view'> 
                                
                                <label id={val.id} >{val.text}</label>
                                <button id={val.id} className='destroy' onClick={this.removeTodo}></button>
                            </div>
                        </li>
                    </div>
                )//list.push 
            }//if
            else{
                list.push(
                    <div key={ind} >
                        <li className={liClass}>
                            <div className='view'> 
                                <input id={val.id} className='toggle' type='checkbox' checked={val.completed} onClick={this.makeComplete}/>
                                <label id={val.id} onDoubleClick={this.makeEditable}>{val.text}</label>
                                <button id={val.id} className='destroy' onClick={this.removeTodo}></button>
                            </div>
                        </li>
                    </div>
                )//list.push
            }
            
        })//for each
    

    return (<div>
            {list}
      </div>
    );
  }
}

export default TodoListItem;