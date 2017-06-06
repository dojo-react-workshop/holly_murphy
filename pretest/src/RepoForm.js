import React, { Component } from 'react';
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
            <div className='row'>
                <div className='large-4 columns'>
                    <label>User Search: </label><input type="text"  onKeyDown={this.handleChange} onChange={this.handleChange}  placeholder='Username' value={this.state.username} /><br />
                </div>
            </div>
        </form>

      </div>
    );
  }
}

RepoForm.propTypes = {
    fetchRepos: PropTypes.func.isRequired
}

export default RepoForm;