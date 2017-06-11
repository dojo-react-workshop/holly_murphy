import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import reducer from './reducers'

const addTab = (name) => {
    store.dispatch({
        type: 'ADD_TAB',
        name: {name}
    })
}

const selectIndex = (id) => {
    store.dispatch({
        type:'UPDATE_SELECTED_TAB',
        id: id
    })
}

const addNewItem = (index, item) => {
    store.dispatch({
        type:'ADD_ITEM',
        id: index,
        item: item
    })
}

let store = createStore(reducer)
console.log(`state: `, store.getState())
const render = () => ReactDOM.render(<App state={store.getState()} reducer={reducer} addTab={addTab} selectIndex={selectIndex} addNewItem={addNewItem} />, document.getElementById('root'));

render()
store.subscribe(render)

registerServiceWorker();
