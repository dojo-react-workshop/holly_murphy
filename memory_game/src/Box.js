import React, { Component } from 'react';
import './box.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Box extends Component {
  render() {
      let boxes=[]
      if(this.props.data.gameState==='waitForPlayer'){
        for(let x=0; x<this.props.data.toLight.length; x++){
             boxes.push(<div key={x} className='box'></div>)
        }
      }else{
        for(let x=0; x<this.props.data.toLight.length; x++){
          if(this.props.data.toLight[x] === true){
              boxes.push(<div key={x} className='lit_box'></div>)
          }else{
             boxes.push(<div key={x} className='box'></div>)
          }
        }
      }
      
    return (
      <div className="Box">
        {boxes}
      </div>
    );
  }
}

export default Box;