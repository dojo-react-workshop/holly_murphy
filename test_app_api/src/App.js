import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display'
import PropTypes from 'prop-types'
import Axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  state={
    repos:[],
    userid: ''
  }

  handleChange = (event)=>{
    this.callFuncToSetState(event.target.value);
  }

  callFuncToSetState = (userID) => {
    this.setState((prev)=>{
      let newState = { ...prev }


      newState.userid = userID
      return newState
    })
  }

  getRepos=()=>{
    Axios.get(`https://api.github.com/users/${this.state.userid}/repos`)
      .then((response)=>{
        this.setState((prev)=>{
          let newState = { ...prev }
          
            response.data.forEach((val)=>{
            newState.repos.push(val);
          })
          return newState
        })
        
      })
      .catch(function(err){
            console.log(`error: ${err}`)
          })
  }




  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <label>UserName: </label><input type="text" value={this.state.userid} onChange={this.handleChange} /><br />
        <Link to='/repos' onClick={this.getRepos} >Get Repos</Link>
        {/*<Display repos={this.state.repos} />*/}

        <Route path='/repos' component={() => (<div className='hi'><Display repos={this.state.repos} /></div>)} />
        </div>
        </Router>
      </div>
    );
  }
}


export default App;
