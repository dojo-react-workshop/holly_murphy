
import React from 'react'

const Form =(props)=>{
      
  const updateUN=(e)=>{
      console.log(`in form update`,e.target)
      props.updateUN(e.target.value)
  }

  const handleSubmit=()=>{
  return(<div>in here</div>)
}

  return(

    
      <form onSubmit={this.handleSubmit}>
        <div className='large-12 columns'>
            <input type="text" placeholder='UserName'  value={props.state.un} onChange={updateUN} />
            <small className='error'>Please enter only characters</small>
        </div>
        <div className='large-12 columns'>
            <input type="text" placeholder='Tele'/>
        </div>
        <div className='large-12 columns'>
            <label>Pet Count:</label>
            <select name="" id="">
              <option value="">0</option>
              <option value="">1</option> 
              <option value="">2</option>  
            </select> 
        </div>
        <div className='large12 columns'>
            <button className='button secondary' type='submit' disabled={props.state.un===''} >Submit</button>
        </div>
      </form>
    
    )
  
}
export default Form