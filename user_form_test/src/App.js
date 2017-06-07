import React, { Component } from 'react';
import './App.css';
import Form from './Form'

class App extends Component {
  
    state={
      un:'',
      tele: '',
      petCount: 0,
      submitted: false
    }

   updateUN=(change)=>{
      console.log(`in app update`,change)
      let newVar = change
      this.setState((prev)=>{
        let newState={ ...prev }
        newState.un=change
        return newState
      })
  }
        
  render() {
    return (
      <div className="App">
        <h1>Test Form</h1>
        <Form state={this.state} updateUN={this.updateUN}/>
        {/*<InfoDisp state={this.state}/>*/}
      </div>
    );
  }
}
/*const InfoDisp=(props)=>{
  return(
    <div><hr />
      <p>Name: {props.state.name}</p>
    </div>

  )

}*/

export default App;
