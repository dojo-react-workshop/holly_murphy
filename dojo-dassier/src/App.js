import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display'
import { createStore } from 'redux'
import { render } from 'react-dom'
import Redux from 'react-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Container from './Container'
import reducer from './reducers'



class App extends Component{

state={
  title:''
}

updateTitle = (e) => {
  let newTitle = e.target.value

  this.setState((prev)=>{
    let newstate = { ...prev }
    newstate.title=newTitle
    return newstate
  })
 
}

addTab = () =>{
  this.props.addTab(this.state.title)
}

selectIndex = (index) => {
  this.props.selectIndex(index)
}

addNewItem = (index, item) => {
  this.props.addNewItem(index, item)
}

  render(){
   return(
      <div className="App grid-example">
        <div className='row collapse'>
          <div className='medium-10 col'>
            <h1>Dojo Dossier</h1>
          </div>
          <div className='medium-10 col'>
            <input type='text' placeholder='Title' value={this.title} onChange={this.updateTitle} />
            <label className='label small secondary' onClick={this.addTab} >Add New Tab</label>
          </div>
        </div>
        <div className='row'>
          <div className='medium-28 columns'><Display state={this.props.state} selectIndex={this.selectIndex} addNewItem={this.addNewItem} /></div>
        </div>
      </div>
    )
  }
}

export default App;
