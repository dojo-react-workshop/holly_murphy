import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import { render } from 'react-dom'
import Redux from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'



const App = (props) => {

 const updateCount = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state
    }
}

//  mapStateToProps = (state) =>{
//     return {
//         count: this.updateCount(state.count, state.action)
//     }
// }

//  mapDispatchToProps = (dispatch) => {
//     return {
//         doAction: ()
//     }
// }

 const store = createStore(updateCount);
 

 const render = () => {
    render(
      <div className="App">
        <Counter count={store.getState()} onIncrement={()=>{store.dispatch({type:'INCREMENT'})}} onDecrement={()=>{store.dispatch({type:'DECREMENT'})}} />
      </div>
    )
 }
  store.subscribe(render)
  render()
  
}

export default App;
