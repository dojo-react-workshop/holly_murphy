import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Redux from 'react-redux'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'



 const updateCount = (count = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return count + 1;
        case 'DECREMENT':
            return count -1;
        default:
            return count
    }
}

const updateCounter = (noOfCounters=1, action) => {
    console.log(`in updateCounter`)
    console.log(`action type: `, action.type)
    switch(action.type){
        case 'ADD_COUNTER':
            return noOfCounters + 1
        case 'REMOVE_COUNTER':
            return noOfCounters - 1
        default:
            return noOfCounters
    }
}

    let reducers = combineReducers({updateCount, updateCounter})
    const store = createStore(reducers);
 

 const render = () => {
     let stateObj = store.getState()
     let noOfCounters = stateObj.updateCounter
    let counterDisp=[]
    let count=stateObj.updateCount
    console.log(`count`,count)

    for(let x=0; x<noOfCounters; x++){
        counterDisp.push(<Counter count={count} onIncrement={()=>{store.dispatch({type:'INCREMENT'})}} onDecrement={()=>{store.dispatch({type:'DECREMENT'})}} />)
    }
    ReactDOM.render(
       <div>
        {counterDisp}
        <button onClick={()=>{store.dispatch({type:'ADD_COUNTER'})}}>Add Counter</button>
       </div>, document.getElementById('root')
    )
 }
  store.subscribe(render)
  render()
  



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
