import React, { Component } from 'react';
import './Form';
import './form.css'

class Form extends Component {
    constructor(){
    super();
    this.state={
      name:'',
      email:'',
      valid:false,
      nameValidation:['','name must be 8 characters', 'name must all characters'],
      emailValidation:['','email but be a valid email'],
      dispNameValidation:1,
      dispEmailValidation:1,
      formOrSubmittedFlag:'form'
    }
  }

  handleChange=(event)=>{
        const value=event.target.value
        const name=event.target.name
        console.log(`name: ${event.target.name}; value: ${event.target.value}`)
        this.setState((prev)=>{
            let newState = { ...prev }
            if(name==='name'){
                newState.name=value
                if(newState.name!='' && newState.name.length>=8){
                    newState.dispNameValidation=0
                }else{
                    newState.dispNameValidation=1
                }
            }else{
                let re=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
                newState.email=value
                if(newState.email!='' && re.test(newState.email)){
                    newState.dispEmailValidation=0
                }else{
                    newState.dispEmailValidation=1
                }
            }

            if(newState.dispNameValidation===0 && newState.dispEmailValidation===0){
                newState.valid=true
            }else{
                newState.valid=false
            }
            
            return newState
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState((prev)=>{
            let newState = { prev }
            newState.formOrSubmittedFlag='submitted'
            
            return newState;
        })//setState
    }

  render() {
      let disp=''
      if(this.state.formOrSubmittedFlag === 'form'){
        disp=(
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' />
            <p>{this.state.nameValidation[this.state.dispNameValidation]}</p>
            <input type="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} name='email' />
            <p>{this.state.emailValidation[this.state.dispEmailValidation]}</p>
            <input type="submit" disabled={!this.state.valid}/>
        </form>)
      }else{
          disp=(<h2>Thanks!</h2>)
      }
          
      
    return (
        
      <div className="form">
        {disp}
      </div>
    );
  }
}

export default Form;