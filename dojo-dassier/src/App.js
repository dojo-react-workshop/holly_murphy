import React, { Component } from 'react';
import './App.css';
import Display from './Display'
import { connect } from 'react-redux'


class App extends Component{

state={
  title:''
}

updateTitle = (e) => {
  let newTitle = e.target.value
  console.log(`update title: `, this.state.title)
  this.setState((prev)=>{
    let newstate = { ...prev }
    newstate.title=newTitle
    return newstate
  })
 
}

addTab = () =>{
  console.log(`in-add-Tab: `, this.state.title)
  this.props.addTab(this.state.title)
}

// selectIndex = (index) => {
//   this.props.selectIndex(index)
// }

// addNewItem = (index, item) => {
//   this.props.addNewItem(index, item)
// }

  render(){
   return(
      <div className="App grid-example">
        <div className='row collapse'>
          <div className='medium-10 col'>
            <h1>Dojo Dossier</h1>
          </div>
          <div className='medium-10 col'>
            <input type='text' placeholder='Title' onChange={this.updateTitle} />
            <label className='label small secondary' onClick={this.addTab} >Add New Tab</label>
          </div>
        </div>
        <div className='row'>
          <div className='medium-28 columns'><Display /></div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

   console.log(`mapDispatch for App: `,dispatch)
    return{
     
        addTab: (name) => {
            dispatch({
              type: 'ADD_TAB',
              name: name
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(App)

