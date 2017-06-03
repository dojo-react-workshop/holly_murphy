import React, { Component } from 'react';

class BottomBar extends Component {

    filter=(e) =>{
      this.props.setFilter(e.target.text)
    }

    filterDisp = ()=>{
      if(this.props.data.filter === 'all' || this.props.data.filter === 'All'){
        return (<ul className='filters'>  
                  <li><a href='#/all' className='selected' onClick={this.filter}>All</a></li>
                  <li><a href= '#/active' onClick={this.filter}>Active</a></li>
                  <li><a href='#/complete' onClick={this.filter}>Complete</a></li></ul>)
      }else if(this.props.data.filter === 'Active'){
        return (<ul className='filters'>  
                  <li><a href='#/all' onClick={this.filter}>All</a></li>
                  <li><a href= '#/active'  className='selected' onClick={this.filter}>Active</a></li>
                  <li><a href='#/complete' onClick={this.filter}>Complete</a></li></ul>)
      }else if(this.props.data.filter === 'Complete'){
        return (<ul className='filters'>  
                  <li><a href='#/all' onClick={this.filter}>All</a></li>
                  <li><a href= '#/active' onClick={this.filter}>Active</a></li>
                  <li><a href='#/complete' className='selected' onClick={this.filter}>Complete</a></li></ul>)
      }   
    }

    itemsLeft=()=>{
      let count=0
      for(let x=0; x<this.props.data.items.length; x++){
        if(this.props.data.items[x].completed===false){
          count+=1
        }
      }
      return count
    }

  render() {

    return (
        <footer className='footer'> 
         <span className='todo-count'><strong>{this.itemsLeft()}</strong> items left</span>
         {this.filterDisp()}
        <button className='clear-completed' onClick={this.props.clearCompleted}>Clear completed</button>
        </footer>
    );
  }
}

export default BottomBar;