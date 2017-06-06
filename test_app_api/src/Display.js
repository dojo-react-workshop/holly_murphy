import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Display extends Component {
  render() {
    console.log(`in render with these props: `,this.props)
   let arr=[]
   this.props.repos.forEach((val)=>{
     arr.push(val.full_name)
   })
   
    return (
        // <li>{this.props.repos}</li>
        <div>{arr}</div>
    
    )
  }
}

Display.propTypes = {
  repos: PropTypes.array.isRequired
  
}

export default Display;
