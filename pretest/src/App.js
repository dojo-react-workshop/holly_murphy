import React, { Component } from 'react';
import './App.css';
import RepoForm from './RepoForm'
import UserList from './UserList'
import axios from 'axios'

class App extends Component {
  

    state={
      data:{},
      repos:[]
    }
  
  fetchUsers=(username)=>{
    //axios.get(`https://api.github.com/users/${username}/repos`)
    axios.get(`https://api.github.com/search/users?q=${username}`)
      .then(response => {
        this.setState((prev)=>{
          let newState={ ...prev }
          newState.data = response.data
          return newState
        })
      })
  }
  fetchRepos=(user)=>{
    console.log(`https://api.github.com/users/${user}/repos`)
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response =>{
        this.setState((prev)=>{
          let newState={ ...prev }
          newState.repos = response.data
          return newState
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <RepoForm fetchUsers={this.fetchUsers}/>
        <UserList users={this.state.data.items} fetchRepos={this.fetchRepos} repos={this.state.repos} />
      </div>
    ) 
  }
}

export default App;
