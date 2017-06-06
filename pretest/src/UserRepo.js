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
            repo_arr.push(<div className='large-8 col' key={id} >{val.html_url}</div>)
          })
          disp=<div>{repo_arr}</div>
      }else{
          disp=<div></div>
      }

    return (
      
        <div className="row">
            {disp}
        </div>
     
    );
  }
}
UserRepo.propTypes = {
    
}

export default UserRepo;