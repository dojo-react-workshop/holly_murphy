import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Redux from 'react-redux'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

let nextId = 2;

const initialState = {
    counters: [{ id: 1, count: 0 }]
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                counters: [...state.counters, { id: nextId++, count: 0 }]
            }
        case 'REMOVE_COUNTER':
            let newstate=state
            state.counters.pop()
            let counters=state.counters
            newstate.counters=counters
            return newstate
        case 'INCREMENT':
            const oldCounters = state.counters;
            const newCounters = oldCounters.map((counter) => {
                if (counter.id === action.id) {
                    return {
                        ...counter,
                        count: counter.count + 1
                    }
                }
                return counter;
            })
            return {
                counters: newCounters
            }

        case 'DECREMENT':
            //this is assigning an array of objects to old Count
            const oldCount = state.counters;
            //newCount is on the counter object we care about
            const newCount = oldCount.map((counter)=>{
                if(counter.id === action.id){
                    return{
                        ...counter,
                        count: counter.count-1
                    }
                }
                return counter
            })
            return {
                counters: newCount
            }
        default:
            return state;
    }
}

// let reducers = combineReducers(counterReducer)
const store = createStore(counterReducer);


const render = () => {
    let stateObj = store.getState()
    console.log(`state: `, stateObj)
    const counters = stateObj.counters.map((counterObj) => {
        return <Counter key={counterObj.id} count={counterObj.count} onIncrement={() => { store.dispatch({ type: 'INCREMENT', id: counterObj.id }) }} onDecrement={() => { store.dispatch({ type: 'DECREMENT',id: counterObj.id }) }} />
    })

    ReactDOM.render(
        <div>
            {counters}
            <button onClick={() => store.dispatch({ type: 'ADD_COUNTER' })}>Add counter</button><br />
            <button onClick={() => store.dispatch({ type: 'REMOVE_COUNTER' })}>Remove counter</button>
        </div>, document.getElementById('root')
    )
}
store.subscribe(render)
render()




// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
