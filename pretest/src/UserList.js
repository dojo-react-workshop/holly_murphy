import React, { Component } from 'react';
import './repo_form.css'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import UserRepo from './UserRepo'

class UserList extends Component {

    fetchRepos=(e)=>{
        this.props.fetchRepos(e.target.id)
    }
    
  render() {
    let users=[]
    let disp=''
    if(this.props.users != null){
        this.props.users.forEach((val, id)=>{
            users.push(<Link key={id} to={`/repos/${val.login}`} ><tr><td width='500' id={val.login} onClick={this.fetchRepos} key={id}>{val.login}</td></tr></Link>)
        })
        disp=(
            <ul>{users}</ul>
        )
    }else{
        let disp=<div></div>
    }
      

    return (
      <Router>
        <table >
            {disp}
            
            <Route path={`/repos/:login`} component={() => (<div ><UserRepo repos={this.props.repos} /></div>)} />
        </table>
      </Router>
    );
  }
}
UserList.propTypes = {
    users: PropTypes.object
}

export default UserList;