import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Redux from 'react-redux'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

// const updateCount = (count = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return count + 1;
//         case 'DECREMENT':
//             return count - 1;
//         default:
//             return count
//     }
// }

// const updateCounter = (noOfCounters = 1, action) => {
//     console.log(`in updateCounter`)
//     console.log(`action type: `, action.type)
//     switch (action.type) {
//         case 'ADD_COUNTER':
//             return noOfCounters + 1
//         case 'REMOVE_COUNTER':
//             return noOfCounters - 1
//         default:
//             return noOfCounters
//     }
// }

let nextId = 2;

const initialState = {
    counters: [{ id: 1, count: 0 }]
}

function counterReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                counters: [...state.counters, { id: nextId++, count: 0 }]
            }
        case 'REMOVE_COUNTER':
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
        default:
            return state;
    }
}

// let reducers = combineReducers(counterReducer)
const store = createStore(counterReducer);


const render = () => {
    let stateObj = store.getState()
    const counters = stateObj.counters.map((counterObj) => {
        return <Counter key={counterObj.id} count={counterObj.count} onIncrement={() => { store.dispatch({ type: 'INCREMENT', id: counterObj.id }) }} onDecrement={() => { store.dispatch({ type: 'DECREMENT' }) }} />
    })

    ReactDOM.render(
        <div>
            {counters}
            <button onClick={() => store.dispatch({ type: 'ADD_COUNTER' })}>Add counter</button>
        </div>, document.getElementById('root')
    )
}
store.subscribe(render)
render()




// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
