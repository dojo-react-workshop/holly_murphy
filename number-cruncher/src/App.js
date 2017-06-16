import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    modeArr:[],
    num:'',
    numArr:[],
    sum:'',
    max:'',
    min:'',
    mean:'',
    mode:null
  }

  handleChange = (e) => {
    let number = e.target.value;
    this.setState((prev) => {
      let newstate = { ...prev }
      newstate.num=number
      return newstate
    })
  }

  newNumber = () => {
    this.setState((prev) => {
      let newstate={ ...prev }
      newstate.numArr = prev.numArr.slice()
      newstate.numArr.push(newstate.num)
      let number = Number(newstate.num)
      
      
      //max
      if(Number(newstate.num) > Number(newstate.max)){
        newstate.max=Number(newstate.num)
      }

      //min
      if(newstate.numArr.length===1){
        newstate.min=Number(newstate.num)
      }else{
        if(Number(newstate.num) < Number(newstate.min)){
          newstate.min=Number(newstate.num)
        }
      }

      //mean
      newstate.sum = Number(newstate.sum) + Number(newstate.num)
      newstate.mean = Number(newstate.sum)/newstate.numArr.length

      //mode
      newstate.modeArr[number] = (newstate.modeArr[number] === undefined) ? 1 : newstate.modeArr[number] + 1;
      newstate.mode = (newstate.mode === null || newstate.modeArr[number] > newstate.modeArr[newstate.mode]) ? number : newstate.mode;
       
      return newstate
    })
  }

  render() {
    return (
      <div className="grid-example">
        <div className="row">
          <div className='small-12 col'>
            <h1>Number Cruncher</h1>
          </div>
        </div>
        <div className='row'>
          <label className='small-12 col'>New Number (must be integer between 0 and 100):</label>
        </div>
        <div className='row'>
          <div className='small-12 col'>
           <input type='text' value={this.state.num} onChange={this.handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='small-12 col'>
          <button onClick={this.newNumber} >Add</button>
          </div>
        </div>
    <table className='table small-12 col'>
      <thead>
        <tr>
            <th width="500">Max</th>
            <th width="100">Min</th>
            <th width="400">Mean</th>
            <th width="400">Mode</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{this.state.max}</td>
            <td >{this.state.min}</td>
            <td>{this.state.mean}</td>
            <td>{this.state.mode}</td>
        </tr>
      </tbody>
        </table >
      </div>
    );
  }
}

export default App;
