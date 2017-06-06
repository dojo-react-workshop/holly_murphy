import React, { Component } from 'react';
import './repo_form.css'
import PropTypes from 'prop-types'

class RepoForm extends Component {
    state = {
        username:''
    }
    handleChange = (e) => {
        const name = e.target.value
        this.updateUsername(name)

    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.fetchUsers(this.state.username);
    }
    
    updateUsername=(val)=>{
        this.setState((prev)=>{
                let newState = { ...prev }
                newState.username=val

                return newState
            })
    }
        
    
  render() {
    return (
      <div className="repo_form">
        <form onSubmit={this.handleSubmit}>
            <label>User Search: </label><input type="text"  onKeyDown={this.handleChange} onChange={this.handleChange}  value={this.state.username} /><br />
        </form>

      </div>
    );
  }
}

RepoForm.propTypes = {
    fetchRepos: PropTypes.func.isRequired
}

export default RepoForm;