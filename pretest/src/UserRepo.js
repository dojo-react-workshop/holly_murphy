import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class UserRepo extends Component {
    
  render() {
    
      let disp=''
      let repo_arr=[]
      if(this.props.repos != null){
          this.props.repos.forEach((val,id)=>{
            repo_arr.push(<p key={id} >{val.html_url}</p>)
          })
          disp=<div>{repo_arr}</div>
      }else{
          disp=<div></div>
      }

    return (
      
        <div className="repo_list">
            {disp}
        </div>
     
    );
  }
}
UserRepo.propTypes = {
    
}

export default UserRepo;