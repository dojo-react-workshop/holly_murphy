import React, { Component } from 'react';
import './repo_form.css'
import PropTypes from 'prop-types'
import './user_list.css'
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
            users.push(<Link key={id} to={`/repos/${val.login}`} ><li id={val.login} onClick={this.fetchRepos} key={id}>{val.login}</li></Link>)
        })
        disp=(
            <ul>{users}</ul>
        )
    }else{
        let disp=<div></div>
    }
      

    return (
      <Router>
        <div className="user_list">
            {disp}
            
            <Route path={`/repos/:login`} component={() => (<div className='hi'><UserRepo repos={this.props.repos} /></div>)} />
        </div>
      </Router>
    );
  }
}
UserList.propTypes = {
    users: PropTypes.object
}

export default UserList;