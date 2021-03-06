import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

// const addTab = (name) => {
//     store.dispatch({
//         type: 'ADD_TAB',
//         name: {name}
//     })
// }

// const selectIndex = (id) => {
//     store.dispatch({
//         type:'UPDATE_SELECTED_TAB',
//         id: id
//     })
// }

// const addNewItem = (index, item) => {
//     store.dispatch({
//         type:'ADD_ITEM',
//         id: index,
//         item: item
//     })
// }

let store = createStore(reducer)
const render = () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

render()
store.subscribe(render)

registerServiceWorker();
